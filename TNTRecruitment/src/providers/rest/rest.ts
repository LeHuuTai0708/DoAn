import { Recruitment } from './../../Models/Recruitment';
import { UsersAccount, Company, Student } from './../../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {
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
  saveStudentInfomation(data: Student) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/student', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  updateStudentInfomation(data: Student) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + '/student/'+data.id, data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  saveCompanyInfomation(data: Company) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/company', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  updateCompanyInfomation(data: Company) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + '/company/'+data.id, data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  saveRecruitmentInfomation(data: Recruitment) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/recruitment', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  getUserInfomation(id : String){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/users/" + id).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
  getStudentInfomation(id : String){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/student/" + id).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
  getCompanyInfomation(id : String){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/company/" + id).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
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
  getRecruitmentInfomation(id : String){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/recruitment/" + id).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
}
