import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import moment from "moment";
import { environment } from "src/environments/environment";
import * as XLSX from "xlsx";

@Injectable({
  providedIn: "root",
})
export class UteisService {
  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private route: Router,
  ) {}

  get apiMapsKey() {
    return environment.GOOGLE_API_MAPS_KEY;
  }

  public alertDanger(message: string = "", duration = 4000) {
    this.snackBar.open(message, "x", {
      panelClass: ["dangersnack"],
      duration: duration,
    });
  }

  public alert(
    text: string,
    backgroundColor = "red",
    color = "white",
    time = 3000,
  ) {
    let aviso: HTMLElement = document.createElement("div");
    aviso.innerHTML = text;

    let estilo = aviso.style;
    estilo.backgroundColor = backgroundColor;
    estilo.color = color;
    estilo.transition = "bottom 0.8s";
    estilo.bottom = "-60px";
    estilo.left = "0";
    estilo.right = "0";
    estilo.margin = "0 auto";
    estilo.position = "fixed";
    estilo.width = "33vw";
    estilo.padding = "12px";
    estilo.textAlign = "center";
    estilo.borderRadius = "5px";

    setTimeout(() => {
      estilo.bottom = "20px";
    }, 100);

    setTimeout(() => {
      estilo.bottom = "-60px";
      setTimeout(() => {
        if (aviso.parentElement) aviso.parentElement.removeChild(aviso);
      }, 800);
    }, time);

    try {
      document.getElementById("modal")?.appendChild(aviso);
    } catch (error) {
      try {
        document.getElementById("container")?.appendChild(aviso);
      } catch (error) {}
    }
  }

  go(route) {
    this.route.navigate(["/" + route]);
  }

  rad(x): number {
    return (x * Math.PI) / 180;
  }

  dateInRange(
    date1: string,
    date2: string,
    dt: string,
    format: string = "DD/MM/YYYY",
    include: boolean = true,
  ) {
    let dt1 = moment(date1, format);
    let dt2 = moment(date2, format);
    if (!include) return moment(dt, format).isBetween(dt1, dt2);
    else
      return (
        moment(dt, format).isBetween(dt1, dt2) ||
        moment(dt, format).isSame(dt1) ||
        moment(dt, format).isSame(dt2)
      );
  }

  async getDistanceMaps(
    p1: { lat: number; lng: number },
    p2: { lat: number; lng: number },
  ): Promise<number> {
    const res = await fetch(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": this.apiMapsKey,
          "X-Goog-FieldMask": "routes.distanceMeters",
        },
        body: JSON.stringify({
          origin: {
            location: { latLng: { latitude: p1.lat, longitude: p1.lng } },
          },
          destination: {
            location: { latLng: { latitude: p2.lat, longitude: p2.lng } },
          },
          travelMode: "DRIVE",
        }),
      },
    );
    const data = await res.json();
    return data.routes?.[0]?.distanceMeters ?? 0;
  }

  getDistance(p1, p2, divisor = 1): number {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(p2.lat - p1.lat);
    var dLong = this.rad(p2.lng - p1.lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) *
        Math.cos(this.rad(p2.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d / divisor; // returns the distance in meter
  }

  modal(
    component,
    options: { width?: any; height?: any; data?: any },
  ): Promise<any> {
    console.log(options);

    const dialogRef = this.dialog.open(component, {
      width: options.width ? options.width : "90vw",
      height: options.height ? options.height : "90vh",
      data: options.data,
    });

    return dialogRef.afterClosed().toPromise();
  }

  async toExcel(json, filename, wscols = null): Promise<any> {
    return new Promise((resolve, reject) => {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      if (wscols) {
        worksheet["!cols"] = wscols;
      }
      const workbook: XLSX.WorkBook = {
        Sheets: { data: worksheet },
        SheetNames: ["data"],
      };
      const excelBuffer: any = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "buffer",
      });
      XLSX.writeFile(workbook, filename + new Date().getTime() + ".xlsx");
      resolve("");
    });
  }

  maskDate(value) {
    if (value.match(/^\d{2}$/) !== null) {
      value = value + "/";
    } else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
      value = value + "/";
    }
    return value;
  }

  maskFone(value) {
    if (value.match(/^\d{1}$/) !== null) {
      value = "(" + value;
    } else if (value.match(/^\(\d{2}\d{0}$/) !== null) {
      value = value + ")";
    } else if (value.match(/^\(\d{2}\)\d{5}$/) !== null) {
      value = value + "-";
    }
    return value;
  }

  floatingSearch(
    evt,
    parent_element,
    list_elements,
    selected: any[] = [],
    offsetx = 0,
    offsety = 0,
    mask: "fone" | "date" | "text" | "number" = "text",
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let redutor = evt.x + offsetx < 301 ? -1 : 300;

      let hflutuant = 400;
      let hbox = mask == "number" ? 280 : 316;
      hbox = selected.length > 0 ? hbox - 30 : hbox;
      let options_select = ["Igual a", "Maior que", "Menor que"];
      let auxelements = list_elements;

      let lista_retorno = new Set();
      let flutuant = document.createElement("div");
      flutuant.style.cssText = `
        position: absolute;
        box-shadow: 1px 1px 5px #cecece;
        width: 300px;
        height: ${hflutuant}px;
        top: calc(${evt.y + offsety}px);
        left: calc(${evt.x + parent_element.scrollLeft + offsetx - redutor}px);
        background: #fff;
        overflow: hidden;
        font-size: 12px;
        padding: 4px
        `;
      let select = document.createElement("select");
      if (mask == "number") {
        select.style.cssText = `
          width: -webkit-fill-available;
          margin: 4px;
          padding: 4px;
          `;

        options_select.forEach((item, i) => {
          let opt = document.createElement("option");
          opt.value = String(i);
          opt.innerText = item;
          select.appendChild(opt);
        });
        flutuant.appendChild(select);
      }

      let search = document.createElement("input");
      search.style.cssText = `
        width: -webkit-fill-available;
        margin: 4px;
        padding: 4px;
        `;
      search.placeholder = "Pesquisa...";
      search.type = mask == "number" ? mask : "text";

      flutuant.appendChild(search);

      let clear = document.createElement("div");
      clear.style.cssText = `
            font-size:12px;
            padding:4px;
            cursor:pointer;
            transition: all 0.5s;
        `;
      clear.onmouseenter = () => {
        clear.style.background = "#cecece";
      };
      clear.onmouseleave = () => {
        clear.style.background = "unset";
      };
      clear.innerHTML = `
            <span style="color:red">(x)</span><span> Limpar Filtros</span>
        `;
      clear.onclick = () => {
        resolve(null);
        flutuant.parentElement?.removeChild(flutuant);
        window.removeEventListener("click", evt_listen);
      };

      let div = document.createElement("div");
      div.id = "flutuant_menu";
      div.style.cssText = `
        width: -webkit-fill-available;
        margin: 4px;
        padding: 4px;
        height: ${hbox}px;
        overflow-y: auto;
        overflow-x: hidden;
        border: 1px solid #000;
        `;

      if (selected.length > 0) {
        flutuant.appendChild(clear);
      }

      let checkboxes: any[] = [];
      const populateDiv = (lista) => {
        checkboxes = [];
        list_elements = lista;
        div.innerHTML = "";
        for (let l of lista) {
          let chdiv = document.createElement("div");
          chdiv.style.cssText = `
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-content: center;
                justify-content: flex-start;
                align-items: center;
                padding: 4px;
                cursor: pointer;
                color: #000;
                `;
          chdiv.onmouseenter = () => {
            chdiv.style.background = "#cecece";
          };
          chdiv.onmouseleave = () => {
            chdiv.style.background = "unset";
          };

          let input = document.createElement("input");
          input.type = "checkbox";
          input.name = l;
          input.onchange = (evt) => {
            if (input.checked) {
              lista_retorno.add(l);
            } else {
              lista_retorno.delete(l);
            }
          };

          if (selected.indexOf(l) > -1) {
            input.checked = true;
            lista_retorno.add(l);
          }

          let label = <any>document.createElement("div");
          label.innerText = String(l) !== "" ? l : "(vazio)";
          label.style.width = "100%";

          label.onclick = () => {
            input.checked = !input.checked;
            if (input.checked) {
              lista_retorno.add(l);
            } else {
              lista_retorno.delete(l);
            }
          };

          chdiv.appendChild(input);
          chdiv.appendChild(label);
          div.appendChild(chdiv);
          checkboxes.push({ input: input, label: l });
        }
      };

      populateDiv(list_elements);

      search.onkeyup = () => {
        if (mask === "fone") {
          search.value = this.maskFone(search.value);
        } else if (mask === "date") {
          search.value = this.maskDate(search.value);
        }
        if (mask == "number" && search.value) {
          const selectedtype = String(select.value);

          let list = list_elements.filter((item) => {
            if (selectedtype == "0") {
              return Number(item) == Number(search.value);
            } else if (selectedtype == "2") {
              return Number(item) < Number(search.value);
            } else if (selectedtype == "1") {
              return Number(item) > Number(search.value);
            }
          });
          populateDiv(list);
        } else if (search.value) {
          let list = list_elements.filter(
            (item) =>
              String(item)
                .toUpperCase()
                .indexOf(String(search.value).toUpperCase()) > -1,
          );
          populateDiv(list);
        } else {
          populateDiv(auxelements);
        }
      };

      search.onchange = search.onkeyup as any;
      flutuant.appendChild(div);

      const evt_listen = (e) => {
        if (!flutuant.contains(e.target as Node)) {
          flutuant.parentElement?.removeChild(flutuant);
          window.removeEventListener("click", evt_listen);
        }
      };

      let btok = document.createElement("button");
      btok.type = "button";
      btok.innerText = "Pesquisar";
      btok.style.cssText = `
        margin: 4px;
        font-size: 12px;
    `;
      btok.onclick = () => {
        resolve(Array.from(lista_retorno));
        flutuant.parentElement?.removeChild(flutuant);
        window.removeEventListener("click", evt_listen);
      };

      let btc = document.createElement("button");
      btc.type = "button";
      btc.innerText = "Cancelar";
      btc.style.cssText = `
        margin: 4px;
        font-size: 12px;
        `;
      btc.onclick = () => {
        flutuant.parentElement?.removeChild(flutuant);
        window.removeEventListener("click", evt_listen);
      };

      let btinvert = document.createElement("button");
      btinvert.type = "button";
      btinvert.innerText = "Inverter Seleção";
      btinvert.style.cssText = `
        margin: 4px;
        font-size: 12px;
        `;
      btinvert.onclick = () => {
        lista_retorno = new Set();
        for (let c of checkboxes) {
          c.input.checked = !c.input.checked;
          if (c.input.checked) lista_retorno.add(c.label);
        }
      };

      let divbt = document.createElement("div");
      divbt.style.cssText = `
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-end;
        align-items: center;
    `;

      divbt.appendChild(btinvert);
      divbt.appendChild(btc);
      divbt.appendChild(btok);

      flutuant.appendChild(divbt);

      parent_element?.appendChild(flutuant);
      setTimeout(() => {
        window.addEventListener("click", evt_listen);
      }, 300);
    });
  }
}
