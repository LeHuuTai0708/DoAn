import { UsersAccount, UserInformation } from './../../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/users").subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
  saveUserAccount(data: UsersAccount) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  saveUserInfomation(data: UserInformation) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/usersInfo', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  getRecruitmentData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/recruitment").subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
  getRecruitment() {
    return new Promise(resolve => {
      firebase.database().ref('/recruitment').once('value', (snapshot) => {
        let Catdata = snapshot.val();
        let temparr = [];
        for (var key in Catdata) {
          temparr.push(Catdata[key]);
        }
        resolve(temparr);
      },
        err => {
          console.log(err);
        });
    });
  }
}