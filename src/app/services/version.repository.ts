import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class VersionModel {
  version: number;

  public static fromJson(js) {
    let obj = new VersionModel();
    obj.version = js.version;
    return obj;
  }

  get versionNumber() {
    return String(this.version).split('').join('.');
  }
}

@Injectable({
  providedIn: 'root',
})
export class VersionRepository {
  constructor(public http: HttpClient) {}

  async getVersion() {
    const versionData = await this.http.get('/assets/version.json').toPromise();
    return VersionModel.fromJson(versionData);
  }
}
