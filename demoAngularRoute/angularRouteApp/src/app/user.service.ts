import { Injectable } from '@angular/core';

export class UserService {

  constructor() { }
  getUser(id: string){
    if(id==='1'){
      return {
        id: '1',
        name: 'test'
      }
    } else {
        return {
        id: '1',
        name: 'test'
      }
    }
  }
}
