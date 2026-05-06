import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Loader } from "@googlemaps/js-api-loader";
import { environment } from "src/environments/environment";

const loader = new Loader({
  apiKey: environment.GOOGLE_API_MAPS_KEY,
  version: "weekly",
  libraries: ["geometry", "marker"],
});

@Component({
  selector: "mapscomp",
  templateUrl: "./mapsgoogle.component.html",
  styleUrls: ["./mapsgoogle.component.scss"],
})
export class MapsgoogleComponent implements OnInit {
  public map: google.maps.Map;
  @Input() location: { lat: number; lng: number };
  @Input() center: { lat: number; lng: number };
  @Input() demarcacao: { lat: number; lng: number }[];
  @Input() markers: google.maps.marker.AdvancedMarkerElement[] = [];
  @Input() marks: any[] = [];
  @Input() colors: any[] = [];
  @Input() labels: any[] = [];
  @Input() width = "inherit";
  @Input() height = "inherit";
  @Input() icon;
  @Input() id = "map";
  @Input() zoom = 8;
  @Input() typemap = "hybrid";
  @Output() getdistance: EventEmitter<any> = new EventEmitter();
  totaldistance = 0;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 100);
  }

  getColor(i) {
    try {
      return this.colors[i];
    } catch (error) {
      return "#ff0000";
    }
  }

  async init() {
    await loader.load();
    if (this.location) {
      this.map = new google.maps.Map(
        document.getElementById(this.id) as HTMLElement,
        {
          center: this.location,
          zoom: this.zoom,
          mapId: environment.GOOGLE_MAP_ID,
          controlSize: 24,
          mapTypeId: this.typemap,
          scrollwheel: false,
        },
      );
      this.setMarker(this.location);
      this.setDemarcacao();
    }
    if (this.center) {
      console.log(this.center);

      this.map = new google.maps.Map(
        document.getElementById(this.id) as HTMLElement,
        {
          center: this.center,
          zoom: this.zoom,
          mapId: environment.GOOGLE_MAP_ID,
          // disableDefaultUI: true,
          controlSize: 24,
          mapTypeId: this.typemap,
          scrollwheel: false,
        },
      );
      if (this.marks ? this.marks.length > 0 : false) {
        for (let j = 0; j < this.marks.length; j++) {
          this.setMarker(this.marks[j]);
          if (j > 0) {
            this.routeService(
              this.marks[j - 1],
              this.marks[j],
              this.getColor(j - 1),
            );
          }
        }
      }
    }
  }

  async routeService(
    loc1: { lat: number; lng: number },
    loc2: { lat: number; lng: number },
    color = "#FF0000",
  ) {
    try {
      const res = await fetch(
        "https://routes.googleapis.com/directions/v2:computeRoutes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": environment.GOOGLE_API_MAPS_KEY,
            "X-Goog-FieldMask":
              "routes.distanceMeters,routes.polyline.encodedPolyline",
          },
          body: JSON.stringify({
            origin: {
              location: { latLng: { latitude: loc1.lat, longitude: loc1.lng } },
            },
            destination: {
              location: { latLng: { latitude: loc2.lat, longitude: loc2.lng } },
            },
            travelMode: "DRIVE",
          }),
        },
      );
      const data = await res.json();
      const route = data.routes?.[0];
      if (!route) return;

      this.totaldistance += route.distanceMeters;
      this.getdistance.emit((this.totaldistance / 1000).toFixed(2));

      const path = google.maps.geometry.encoding.decodePath(
        route.polyline.encodedPolyline,
      );
      new google.maps.Polyline({
        path,
        strokeColor: color,
        strokeOpacity: 1,
        strokeWeight: 4,
        map: this.map,
      });
    } catch (error) {
      console.log("Routes request failed:", error);
    }
  }

  setMarker(location: { lat: number; lng: number; label?: string }) {
    let content: HTMLElement | undefined;

    if (this.icon) {
      const img = document.createElement("img");
      img.src = this.icon;
      img.style.width = "50px";
      img.style.height = "50px";
      content = img;
    }

    if (location.label) {
      const div = document.createElement("div");
      div.textContent = location.label;
      content = div;
    }

    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: location,
      map: this.map,
      ...(content && { content }),
    });

    this.markers.push(marker);
  }

  setDemarcacao() {
    if (this.demarcacao) {
      const bermudaTriangle = new google.maps.Polygon({
        paths: this.demarcacao,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });
      bermudaTriangle.setMap(this.map);
    }
  }
}
