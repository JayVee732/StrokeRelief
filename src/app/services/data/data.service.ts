import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public paramData: any;
  constructor() { }

  public setDestn(paramData) {
    this.paramData = paramData;
  }

  getDestn() {
    return this.paramData;
  }
}
