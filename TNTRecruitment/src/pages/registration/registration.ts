import { FormBuilder, Validators } from '@angular/forms';
import { UsersAccount, UserInformation } from './../../Models/Users';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {Md5} from 'ts-md5/dist/md5';
import { Storage } from '@ionic/storage';

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
  selectTinh : string;
  selectTP : string;
  selectCompanySize : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage : Storage,
     public restProvider: RestProvider,public formBuilder :FormBuilder,public alertCtrl : AlertController) {
      this.user = new UsersAccount();
    this.formRegistration = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      company: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Login() {
    this.settingAccount();
    if(this.user.email != null && this.user.pass!= null && this.userInfo.address != null 
      && this.userInfo.company != null && this.userInfo.companySize != null && this.userInfo.contact!= null){
    this.saveUser(this.user);
    this.saveUserInfo(this.userInfo);
        this.navCtrl.push(TabsPage);
      }else{
        this.showError();
      }
  }
  settingAccount(){
    let loginInfo = this.formRegistration.value;
    this.userInfo = new UserInformation();
    this.user.id = Md5.hashStr(loginInfo["email"]).toString();
    this.userInfo.id = this.user.id;
    this.user.email = loginInfo["email"];
    this.user.pass = loginInfo["password"];
    this.userInfo.company = loginInfo["company"];
    this.userInfo.contact = loginInfo["contact"];
    this.userInfo.address = loginInfo["address"]+"/ " +this.selectTinh+"/ " +this.selectTP;
    this.userInfo.companySize = this.selectCompanySize;
  }
  saveUser(User : UsersAccount) {
    this.restProvider.saveUserAccount(User).then((result) => {
      this.storage.set("AccountID", this.user.id);
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
  onTinhChange(value){
    this.selectTinh = value;
  }
  onTpChange(value){
    this.selectTP = value;
    console.log(this.selectTP);
  }
  onCompanySizeChange(value){
    this.selectCompanySize = value;
  }
  showError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: "You need to fill all the form",
      buttons: ['OK']
    });
    alert.present();
  }
}
