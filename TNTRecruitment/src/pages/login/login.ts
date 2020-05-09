import { RestProvider } from './../../providers/rest/rest';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { UsersAccount } from '../../Models/Users';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users: UsersAccount[];
  formLogin: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider, public formBuilder: FormBuilder,
    public storage: Storage, private alertCtrl: AlertController) {
    this.formLogin = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.getUsers();
  }
  Login() {
    let loginInfo = this.formLogin.value;
    if (this.checkLogin(loginInfo["email"],loginInfo["password"])) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.showError("Login fail");
    }
  }
  getUsers() {
    this.restProvider.getUsers().then(data => {
      this.users = JSON.parse(JSON.stringify(data));
    })
  }
  checkLogin(email: any, pass: any): boolean {
    if (this.users.length != 0) {
      for (let i = 0; i < this.users.length; i++) {
        if (email == this.users[i].email && pass == this.users[i].pass) {
          this.storage.set("AccountID", this.users[i].id);
          return true;
        }
      }
    }
    return false;
  }
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
