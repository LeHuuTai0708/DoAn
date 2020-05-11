import { FormBuilder, Validators } from '@angular/forms';
import { UsersAccount, UserInformation } from './../../Models/Users';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {Md5} from 'ts-md5/dist/md5';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  Tinh: string[] = ["Hà Nội", "Lâm Đồng", "Hải Phòng", "Gia Lai"]
  ThanhPho: string[] = ["Hoàn Kiếm", "Đà Lạt", "Hồng Bàn", "Pleiku"]
  QuyMo: string[] = ["Lớn", "Nhỏ", "Vừa"]
  users: UsersAccount[];
  user: UsersAccount;
  userInfo : UserInformation;
  formRegistration: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public restProvider: RestProvider,public formBuilder :FormBuilder) {
    this.formRegistration = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      company: ['', Validators.required],
      contact: ['', Validators.required]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Login() {
    this.settingAccount();
    console.log(this.user);
    console.log(this.userInfo);
    //this.saveUser(this.user);
    //this.saveUserInfo(this.userInfo);
    //this.navCtrl.push(TabsPage);

  }
  settingAccount(){
    let loginInfo = this.formRegistration.value;
    this.user = new UsersAccount();
    this.userInfo = new UserInformation();
    this.user.id = Md5.hashStr(loginInfo["email"]).toString();
    this.userInfo.id = this.user.id;
    this.user.email = loginInfo["email"];
    this.user.pass = loginInfo["password"];
    this.userInfo.company = loginInfo["company"];
    this.userInfo.contact = loginInfo["contact"];
  }
  saveUser(User : UsersAccount) {
    this.restProvider.saveUserAccount(User).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  saveUserInfo(userInfo :UserInformation) {
    this.restProvider.saveUserInfomation(userInfo).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
