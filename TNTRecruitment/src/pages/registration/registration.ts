import { FormBuilder, Validators } from '@angular/forms';
import { UsersAccount, Student } from './../../Models/Users';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Md5 } from 'ts-md5/dist/md5';
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
  users: UsersAccount[];
  user: UsersAccount;
  studentInfo: Student;
  formRegistration: any;
  selectTinh: string;
  selectTP: string;
  selectCompanySize: string;
  constructor(public navCtrl: NavController, public toastController: ToastController, public navParams: NavParams, public storage: Storage,
    public restProvider: RestProvider, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.user = new UsersAccount();
    this.studentInfo = new Student();
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
    this.restProvider.getUsers().then((data) => {
      this.users = JSON.parse(JSON.stringify(data));
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Login() {
    this.settingAccount();
  }
  settingAccount() {
    let loginInfo = this.formRegistration.value;
    this.user.email = loginInfo["account"];
    let _id = Md5.hashStr(loginInfo["account"]).toString();
    this.user.id = _id;
    this.user.pass = loginInfo["password"];
    this.user.type = "student";
    if (this.user.email != "" && this.user.pass != "") {
      if (this.checkAccount(this.user.email)) {
        this.showError("Lỗi", "Tài khoản đã tồn tại");
      } else {
        this.saveUser(this.user);
        this.studentInfo.id = _id;
        this.studentInfo.name = loginInfo["name"];
        this.studentInfo.sex = loginInfo["sex"];
        this.studentInfo.dateofbirth = loginInfo["dateofbirth"];
        this.studentInfo.email = loginInfo["email"];
        this.studentInfo.phone = loginInfo["phone"];
        this.studentInfo.address = loginInfo["address"];
        this.studentInfo.school = loginInfo["school"];
        this.studentInfo.specialize = loginInfo["specialize"];
        this.saveUserInfo(this.studentInfo);
      }
    } else {
      this.showError("Lỗi", "Bạn cần điền tài khoản và mật khẩu");
    }

  }
  checkAccount(email: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email) {
        return true;
      }
    }
    return false;
  }
  saveUser(User: UsersAccount) {
    this.restProvider.saveUserAccount(User).then((result) => {
      this.storage.set("AccountID", this.user.id);
    }, (err) => {
      console.log(err);
    });
  }
  saveUserInfo(userInfo: Student) {
    this.restProvider.saveStudentInfomation(userInfo).then((result) => {
      console.log(result);
      this.presentToast();
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.showError("Lỗi", "Lỗi");
      console.log(err);
    });
  }
  showError(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Đăng ký tài khoản thành công.',
      duration: 2000
    });
    toast.present();
  }
}
