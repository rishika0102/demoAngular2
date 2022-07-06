import { Injectable } from '@angular/core';
export class SharedService {

  constructor() { }
    OnEnrollClicked(title: string) {
      alert('Thankyou for enrolling ' +title+ ' course');
    }
}
