import { FormBuilder, Validators } from '@angular/forms';
import { UsersAccount, Student } from './../../Models/Users';
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
  studentInfo : Student;
  formRegistration: any;
  selectTinh : string;
  selectTP : string;
  selectCompanySize : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage : Storage,
     public restProvider: RestProvider,public formBuilder :FormBuilder,public alertCtrl : AlertController) {
      this.user = new UsersAccount();
    this.formRegistration = formBuilder.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      sex: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      school: ['', Validators.required],
      specialize: ['', Validators.required]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  // Login() {
  //   this.settingAccount();
  //   if(this.user.email != null && this.user.pass!= null && this.userInfo.address != null 
  //     && this.userInfo.company != null && this.userInfo.companySize != null && this.userInfo.contact!= null){
  //   this.saveUser(this.user);
  //   this.saveUserInfo(this.userInfo);
  //       this.navCtrl.push(TabsPage);
  //     }else{
  //       this.showError();
  //     }
  // }
  // saveUser(User : UsersAccount) {
  //   this.restProvider.saveUserAccount(User).then((result) => {
  //     this.storage.set("AccountID", this.user.id);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  // saveUserInfo(userInfo :UserInformation) {
  //   this.restProvider.saveUserInfomation(userInfo).then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
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
