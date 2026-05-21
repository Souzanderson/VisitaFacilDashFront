import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import moment from "moment";
import { DatepickerComponent } from "src/app/components/datepicker/datepicker.component";
import { DropsearchComponent } from "src/app/components/dropsearch/dropsearch.component";
import { ConnectionService } from "src/app/services/connection.service";
import { UteisService } from "src/app/services/uteis.service";

@Component({
  selector: "app-visitascliente",
  templateUrl: "./visitascliente.component.html",
  styleUrls: ["./visitascliente.component.scss"],
})
export class VisitasclienteComponent implements OnInit {
  @ViewChild("dti") dti!: DatepickerComponent;
  @ViewChild("dtf") dtf!: DatepickerComponent;
  @ViewChild("dropevento") dropevento!: DropsearchComponent;
  public dtini = moment().subtract(30, "days").format("YYYY/MM/DD");
  public dtfim = moment().format("YYYY/MM/DD");
  public loading = true;
  public visitas: any = [];
  public cliente: any;
  public objetivos: any = [];
  public objetivosdic: any = {};
  public evento;
  public eventos: any = [];
  public eventoslist: any = [];
  public contato: any = [];
  public contatodic: any = {};
  public aux: any = [];
  public id = null;
  public statistics: any = [];
  public statisticsformas = [];
  public distopt = "maior";
  public vendedor: any;
  public distance;
  public sectors = [
    { sector: "Bem-sucedidas", size: 0 },
    { sector: "Malsucedidas", size: 0 },
  ];

  public lightbox: {
    img: string;
    rotation: number;
    flipped: boolean;
    imgs: any[];
    idx: number;
  } | null = null;
  public mapModal: {
    id: string;
    location?: any;
    demarcacao?: any;
    zoom: number;
    title: string;
  } | null = null;

  @HostListener("document:keydown", ["$event"])
  onKeyDown(e: KeyboardEvent) {
    if (!this.lightbox) return;
    if (e.key === "Escape") this.closeLightbox();
    if (e.key === "ArrowLeft") this.prevImage();
    if (e.key === "ArrowRight") this.nextImage();
    if (e.key === "r") this.rotateLightbox(1);
  }

  constructor(
    private route: ActivatedRoute,
    private conn: ConnectionService,
    private util: UteisService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 300);
  }

  async init() {
    this.route.params.pipe().forEach((params) => {
      this.id = params["idcliente"];
    });
    this.dti.setValue(moment().subtract(30, "days").format("DD/MM/YYYY"));
    this.dtf.setValue(moment().format("DD/MM/YYYY"));
    await this.get();
  }

  async search() {
    this.dtini = moment(this.dti.value, "DD/MM/YYYY").format("YYYY/MM/DD");
    this.dtfim = moment(this.dtf.value, "DD/MM/YYYY").format("YYYY/MM/DD");
    await this.get();
    this.instant();
  }

  getPropLocation(lat, lng) {
    return { lat: Number(lat), lng: Number(lng) };
  }

  getDist(visita, nb = false) {
    try {
      if (
        visita.latitudeoriginal &&
        visita.longitudeoriginal &&
        visita.enderecocompleto.latitude &&
        visita.enderecocompleto.longitude
      ) {
        if (!nb) {
          return (
            this.util
              .getDistance(
                this.getPropLocation(
                  visita.latitudeoriginal,
                  visita.longitudeoriginal,
                ),
                this.getPropLocation(
                  visita.enderecocompleto.latitude,
                  visita.enderecocompleto.longitude,
                ),
                1000,
              )
              .toFixed(2) + "km"
          );
        } else {
          return Number(
            this.util
              .getDistance(
                this.getPropLocation(
                  visita.latitudeoriginal,
                  visita.longitudeoriginal,
                ),
                this.getPropLocation(
                  visita.enderecocompleto.latitude,
                  visita.enderecocompleto.longitude,
                ),
                1000,
              )
              .toFixed(2),
          );
        }
      } else {
        if (!nb) return "Não identificada!";
        else return 0;
      }
    } catch (error) {
      if (!nb) return "Não identificada!";
      else return 0;
    }
  }

  report() {
    window.print();
  }

  shareReport() {
    const url = `${window.location.origin}/relatorio/${this.id}?dtini=${this.dtini}&dtfim=${this.dtfim}&token=${this.conn.user.hascode}&sys=${this.conn.user.idsistema}`;
    window.open(url, "_blank");
    navigator.clipboard.writeText(url).then(() => {
      this.util.alert(
        "Relatório aberto e link copiado!",
        "var(--color-tertiary)",
        "white",
        3000,
      );
    });
  }

  openLightbox(imgs: any[], idx: number) {
    this.lightbox = {
      img: imgs[idx].linkimg,
      rotation: 0,
      flipped: false,
      imgs,
      idx,
    };
  }

  closeLightbox() {
    this.lightbox = null;
  }

  rotateLightbox(dir: number) {
    this.lightbox!.rotation = (this.lightbox!.rotation + dir * 90 + 360) % 360;
  }

  flipLightbox() {
    this.lightbox!.flipped = !this.lightbox!.flipped;
  }

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
    if (!this.lightbox) return "";
    return `rotate(${this.lightbox.rotation}deg) scaleX(${this.lightbox.flipped ? -1 : 1})`;
  }

  openMapModal(config: {
    id: string;
    location?: any;
    demarcacao?: any;
    zoom: number;
    title: string;
  }) {
    this.mapModal = config;
  }

  closeMapModal() {
    this.mapModal = null;
  }

  getKm(visita) {
    try {
      return (
        (Number(visita.kmfinal) - Number(visita.kminicial)).toFixed(2) + " km"
      );
    } catch (error) {
      return 0 + " km";
    }
  }

  kmCalc(item) {
    try {
      return Number(item.kmfechamento) - Number(item.kmabertura);
    } catch (error) {
      return 0;
    }
  }

  instant() {
    this.loading = true;
    setTimeout(() => {
      this.visitas = this.aux.filter((item) => {
        let flag: any = [];
        if (this.evento) {
          flag.push(Number(item["idevento"]) == Number(this.evento));
        } else flag.push(true);
        return flag.every((el) => el);
      });
      this.visitas = this.visitas.filter((item) => {
        console.log(this.getDist(item, true));

        if (this.distance) {
          if (this.distopt == "maior")
            return Number(this.distance) < Number(this.getDist(item, true));
          else if (this.distopt == "menor")
            return Number(this.distance) > Number(this.getDist(item, true));
          else if (this.distopt == "igual")
            return Number(this.distance) == Number(this.getDist(item, true));
        }
        return true;
      });
      this.structCharts();
      this.loading = false;
    }, 300);
  }

  async get() {
    this.loading = true;
    try {
      this.cliente = await this.conn.getCliente(this.id).toPromise();

      const [vendedor, objetivos, eventos, contato, visitas] =
        await Promise.all([
          this.conn
            .getVendedores(
              this.dtini,
              this.dtfim,
              this.cliente.idrepresentanteerp as any,
            )
            .toPromise(),
          this.conn.getObjetivos().toPromise(),
          this.conn.getEventos().toPromise(),
          this.conn.getContato().toPromise(),
          this.conn.getByClient(this.id, this.dtini, this.dtfim).toPromise(),
        ]);

      try {
        this.vendedor = vendedor[0];
      } catch {
        this.vendedor = null;
      }
      this.objetivos = objetivos;
      this.eventos = eventos;
      this.eventoslist = this.eventos;
      this.dropevento.setItems(this.eventoslist);
      this.contato = contato;
      this.visitas = visitas;
      this.aux = this.visitas;

      this.structCharts();
    } catch (error) {}
    this.loading = false;
  }

  structCharts() {
    this.sectors = [
      { sector: "Bem-sucedidas", size: 0 },
      { sector: "Malsucedidas", size: 0 },
    ];
    this.statistics = [];
    this.statisticsformas = [];
    let data = {};
    let dataforma = {};

    for (let o of this.objetivos) {
      this.objetivosdic[o["iderp"]] = o["objetivo"];
      data[o["objetivo"]] = 0;
    }

    for (let o of this.contato) {
      this.contatodic[o["iderp"]] = o["formacontato"];
      dataforma[o["formacontato"]] = 0;
    }

    for (let v of this.visitas) {
      data[this.objetivosdic[v["idobjetivo"]]] += 1;
      dataforma[this.contatodic[v["idformacontato"]]] += 1;
      if (v["idmotivo"]) {
        this.sectors[1].size += 1;
      } else {
        this.sectors[0].size += 1;
      }
      if (v["enderecocompleto"]) {
        try {
          v["enderecocompleto"] = JSON.parse(v["enderecocompleto"]);
        } catch (error) {}
      }
      if (v["imagens"]) {
        try {
          v["imagens"] = JSON.parse(v["imagens"]);
        } catch (error) {}
      }
      if (v["audios"]) {
        try {
          v["audios"] = JSON.parse(v["audios"]);
        } catch (error) {}
      }
      if (v["demarcacaoprop"]) {
        try {
          v["demarcacaoprop"] = JSON.parse(v["demarcacaoprop"]);
        } catch (error) {}
      }
    }

    for (let k in data) {
      this.statistics.push({ label: k, value: data[k] });
    }
    for (let k in dataforma) {
      this.statisticsformas.push({ sector: k, size: dataforma[k] });
    }
    console.log(this.sectors);
    console.log(this.statistics);
    console.log(this.statisticsformas);
  }
}
