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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage : Storage,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  Ham() {
    this.navCtrl.push(HomePage);
  }
  Exit(){
    this.storage.clear();
    this.app.getRootNav().setRoot(FirstPage);
  }
}
