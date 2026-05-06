import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  public loading = true;
  public error = false;
  public cliente: any = null;
  public visitas: any[] = [];
  public dtini: string;
  public dtfim: string;
  private token: string;
  private sys: string;
  private idcliente: string;

  public lightbox: { img: string; rotation: number; flipped: boolean; imgs: any[]; idx: number } | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (!this.lightbox) return;
    if (e.key === 'Escape')      this.closeLightbox();
    if (e.key === 'ArrowLeft')   this.prevImage();
    if (e.key === 'ArrowRight')  this.nextImage();
    if (e.key === 'r')           this.rotateLightbox(1);
  }

  ngOnInit(): void {
    this.route.params.forEach((p) => (this.idcliente = p['idcliente']));
    this.route.queryParams.forEach((q) => {
      this.dtini = q['dtini'];
      this.dtfim = q['dtfim'];
      this.token = q['token'];
      this.sys = q['sys'];
    });
    if (this.token && this.sys) {
      this.load();
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  async load() {
    const url = environment.URL_SERVER_PY;
    try {
      this.cliente = await this.http
        .get(`${url}cliente/byid?idsistema=${this.sys}&hash=${this.token}&idcliente=${this.idcliente}`)
        .toPromise();

      this.visitas = (await this.http
        .post(`${url}visitas/doc?hash=${this.token}`, {
          idsistema: this.sys,
          idcliente: this.idcliente,
          dtinicio: this.dtini,
          dtfim: this.dtfim,
        })
        .toPromise()) as any[];

      for (const v of this.visitas) {
        if (v.enderecocompleto) { try { v.enderecocompleto = JSON.parse(v.enderecocompleto); } catch (_) {} }
        if (v.imagens)          { try { v.imagens = JSON.parse(v.imagens); } catch (_) {} }
        if (v.demarcacaoprop)   { try { v.demarcacaoprop = JSON.parse(v.demarcacaoprop); } catch (_) {} }
      }
    } catch (_) {
      this.error = true;
    }
    this.loading = false;
  }

  get successCount() { return this.visitas.filter((v) => !v.idmotivo).length; }
  get failCount()    { return this.visitas.filter((v) =>  v.idmotivo).length; }

  hasPropLocation(v: any): boolean {
    return v.enderecocompleto && v.enderecocompleto.latitude && v.enderecocompleto.longitude;
  }

  hasVisitLocation(v: any): boolean {
    return !!(v.latitudeoriginal && v.longitudeoriginal);
  }

  propLocation(v: any) {
    return { lat: Number(v.enderecocompleto.latitude), lng: Number(v.enderecocompleto.longitude) };
  }

  visitLocation(v: any) {
    return { lat: Number(v.latitudeoriginal), lng: Number(v.longitudeoriginal) };
  }

  staticMapUrl(lat: number, lng: number, zoom = 15): string {
    const key = environment.GOOGLE_API_MAPS_KEY;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=hybrid&markers=color:red%7C${lat},${lng}&key=${key}`;
  }

  print() { window.print(); }

  // Lightbox
  openLightbox(imgs: any[], idx: number) {
    this.lightbox = { img: imgs[idx].linkimg, rotation: 0, flipped: false, imgs, idx };
  }

  closeLightbox() { this.lightbox = null; }

  rotateLightbox(dir: number) {
    this.lightbox.rotation = (this.lightbox.rotation + dir * 90 + 360) % 360;
  }

  flipLightbox() { this.lightbox.flipped = !this.lightbox.flipped; }

  prevImage() {
    if (this.lightbox && this.lightbox.idx > 0) {
      this.lightbox.idx--;
      this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
      this.lightbox.rotation = 0;
      this.lightbox.flipped = false;
    }
  }

  nextImage() {
    if (this.lightbox && this.lightbox.idx < this.lightbox.imgs.length - 1) {
      this.lightbox.idx++;
      this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
      this.lightbox.rotation = 0;
      this.lightbox.flipped = false;
    }
  }

  getLightboxTransform() {
    if (!this.lightbox) return '';
    return `rotate(${this.lightbox.rotation}deg) scaleX(${this.lightbox.flipped ? -1 : 1})`;
  }
}
