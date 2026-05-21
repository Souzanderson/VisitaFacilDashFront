import { Component, HostListener, Inject, OnInit, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConnectionService } from "src/app/services/connection.service";

@Component({
  selector: "app-visitadetail",
  templateUrl: "./visitadetail.component.html",
  styleUrls: ["./visitadetail.component.scss"],
})
export class VisitadetailComponent implements OnInit {
  public demarcacao: any;
  public imagens: any = [];
  public videos: any = [];
  public audios: any = [];
  public loading = false;
  public lightbox: { img: string; rotation: number; flipped: boolean; imgs: any[]; idx: number } | null = null;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (!this.lightbox) return;
    if (e.key === 'Escape')     this.closeLightbox();
    if (e.key === 'ArrowLeft')  this.prevImage();
    if (e.key === 'ArrowRight') this.nextImage();
    if (e.key === 'r')          this.rotateLightbox(1);
  }

  constructor(
    @Optional() public dialogRef: MatDialogRef<VisitadetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private conn: ConnectionService,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.getData();
    try {
      this.demarcacao = JSON.parse(this.data.demarcacaoprop);
    } catch (error) {}
  }

  async getData() {
    this.loading = true;
    try {
      this.imagens = await this.conn
        .getImagensVisitas(this.data.id)
        .toPromise();
      this.audios = await this.conn.getAudiosVisitas(this.data.id).toPromise();
      this.videos = await this.conn.getVideosVisitas(this.data.id).toPromise();
      console.log(this.imagens);
      console.log(this.audios);
    } catch (error) {}
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  skeletonArr(n: number) { return Array(n > 0 ? n : 3); }

  openLightbox(imgs: any[], idx: number) {
    this.lightbox = { img: imgs[idx].linkimg, rotation: 0, flipped: false, imgs, idx };
  }
  closeLightbox() { this.lightbox = null; }
  rotateLightbox(dir: number) { if (this.lightbox) this.lightbox.rotation = (this.lightbox.rotation + dir * 90 + 360) % 360; }
  flipLightbox() { if (this.lightbox) this.lightbox.flipped = !this.lightbox.flipped; }
  prevImage() {
    if (this.lightbox && this.lightbox.idx > 0) {
      this.lightbox.idx--;
      this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
      this.lightbox.rotation = 0; this.lightbox.flipped = false;
    }
  }
  nextImage() {
    if (this.lightbox && this.lightbox.idx < this.lightbox.imgs.length - 1) {
      this.lightbox.idx++;
      this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
      this.lightbox.rotation = 0; this.lightbox.flipped = false;
    }
  }
  getLightboxTransform() {
    if (!this.lightbox) return '';
    return `rotate(${this.lightbox.rotation}deg) scaleX(${this.lightbox.flipped ? -1 : 1})`;
  }

  isDemarcado(demarcacao) {
    try {
      let res = JSON.parse(demarcacao);
      return "position" in res;
    } catch (error) {
      return false;
    }
  }

  onClose(value = null): void {
    this.dialogRef.close(value);
  }

  getPropLocation(lat, lng) {
    return { lat: Number(lat), lng: Number(lng) };
  }
}
