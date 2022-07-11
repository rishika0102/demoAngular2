import { Injectable, EventEmitter } from '@angular/core';

export class DataService{

  dataEmitter = new EventEmitter<string>();

  raiseDataEmitterEvent(data: string){
      this.dataEmitter.emit(data);
  }
}
