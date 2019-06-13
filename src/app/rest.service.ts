import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://147.87.116.59:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
    }

    getServices() {
      return new Promise(resolve => {
      this.http.get(this.apiUrl+'/services').subscribe(data => {
      resolve(data);
    }, 
      err => {
      console.log(err);
      });
      });
      }

      getHcp() {
        return new Promise(resolve => {
        this.http.get(this.apiUrl+'/providers').subscribe(data => {
        resolve(data);
      }, 
        err => {
        console.log(err);
        });
        });
        }
}
