import { RestProvider } from './../../providers/rest/rest';
import { UserInformation } from './../../Models/Users';
import { FirstPage } from './../first/first';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  public myUser: boolean = false;
  user: UserInformation;
  id: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private app: App, public restProvider: RestProvider) {
    this.storage.get("AccountID").then((data) => {
      this.id = data;
      this.restProvider.getUsersInfomation(this.id).then((data) => {
        this.user = JSON.parse(JSON.stringify(data));
      });
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
}
