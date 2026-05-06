import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-visitadetail',
  templateUrl: './visitadetail.component.html',
  styleUrls: ['./visitadetail.component.scss'],
})
export class VisitadetailComponent implements OnInit {
  public demarcacao;
  public imagens:any = [];
  public audios:any = [];
  public loading = false;

  constructor(
    @Optional() public dialogRef: MatDialogRef<VisitadetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
     private conn: ConnectionService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.getData()
    try {
      this.demarcacao = JSON.parse(this.data.demarcacaoprop);
    } catch (error) {}
  }

  async getData(){
    this.loading = true;
    try {
      this.imagens = await this.conn.getImagensVisitas(this.data.id).toPromise();
      this.audios = await this.conn.getAudiosVisitas(this.data.id).toPromise();
      console.log(this.imagens);
      console.log(this.audios);
      
    } catch (error) {
      
    }
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  isDemarcado(demarcacao) {
    try {
      let res = JSON.parse(demarcacao);
      return 'position' in res;
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
