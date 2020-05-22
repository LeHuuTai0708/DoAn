import { Student, Company } from './../../Models/Users';
import { RestProvider } from './../../providers/rest/rest';
import { FirstPage } from './../first/first';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsersAccount } from '../../Models/Users';
import { UpdateAccountPage } from '../update-account/update-account';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  public settingUserInfo: boolean;
  user: UsersAccount;
  student: Student;
  company: Company;
  id: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private app: App, public restProvider: RestProvider) {
    this.storage.get("AccountID").then((data) => {
      this.id = data;
      this.restProvider.getUserInfomation(this.id).then((data) => {
        this.user = JSON.parse(JSON.stringify(data));
        this.SettingInfo().then((data) => {
          this.settingUserInfo = data;
        });
      });
    });
  }
  SettingInfo(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.user != null) {
        switch (this.user.type) {
          case "student":
            this.restProvider.getStudentInfomation(this.id).then((data) => {
              this.student = JSON.parse(JSON.stringify(data));
              resolve(true);
            });
            break;
          case "company":
            this.restProvider.getCompanyInfomation(this.id).then((data) => {
              this.company = JSON.parse(JSON.stringify(data));
              resolve(false);
              console.log(this.company);
            });
            break;
        }
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  Home() {
    this.navCtrl.push(HomePage);
  }
  Exit() {
    this.storage.clear();
    this.app.getRootNav().setRoot(FirstPage);
  }

  UpdateAccount() {
    this.navCtrl.push(UpdateAccountPage);
  }
}
