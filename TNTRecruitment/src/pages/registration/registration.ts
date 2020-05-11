import { FormBuilder, Validators } from '@angular/forms';
import { UsersAccount, UserInformation } from './../../Models/Users';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

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
  user: UsersAccount;
  userInfo : UserInformation;
  formRegistration: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public restProvider: RestProvider,public formBuilder :FormBuilder) {
    this.formRegistration = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      company: ['', Validators.required]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Login() {
    this.navCtrl.push(TabsPage);
  }
  saveUser() {
    this.restProvider.saveUserAccount(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  saveUserInfo() {
    this.restProvider.saveUserInfomation(this.userInfo).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
