import { AccountPage } from './../account/account';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Toast, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Student, Company, UsersAccount } from '../../Models/Users';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the UpdateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-account',
  templateUrl: 'update-account.html',
})
export class UpdateAccountPage {
  public settingUserInfo: boolean;
  user: UsersAccount;
  student: Student;
  company: Company;
  id: string;
  formStudentDetail: any;
  formCompanyDetail: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public storage: Storage, private app: App, public restProvider: RestProvider, private toastCtrl: ToastController) {
    this.GetIdAccount();
    this.SettingFormDetail();
  }
  SettingFormDetail() {
    this.formStudentDetail = this.formBuilder.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      school: ['', Validators.required],
      specialize: ['', Validators.required]
    });
    this.formCompanyDetail = this.formBuilder.group({
      name: ['', Validators.required],
      headquarters: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      worktime: ['', Validators.required],
      specialize: ['', Validators.required]
    });
  }
  GetIdAccount() {
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
  UpdateStudentInfo() {
    let loginInfo = this.formStudentDetail.value;
    let student = new Student();
    student.id = this.id;
    student.name = loginInfo["name"];
    student.sex = loginInfo["sex"];
    student.dateofbirth = loginInfo["dateofbirth"];
    student.phone = loginInfo["phone"];
    student.email = loginInfo["email"];
    student.address = loginInfo["address"];
    student.school = loginInfo["school"];
    student.specialize = loginInfo["specialize"];
    student.image = this.student.image;
    this.restProvider.updateStudentInfomation(student).then(() => {
      this.presentToast();
    });
  }
  UpdateCompanyInfo() {
    let loginInfo = this.formCompanyDetail.value;
    let company = new Company();
    company.id = this.id;
    company.name = loginInfo["name"];
    company.headquarters = loginInfo["headquarters"];
    company.address = loginInfo["address"];
    company.email = loginInfo["email"];
    company.phone = loginInfo["phone"];
    company.website = loginInfo["website"];
    company.worktime = loginInfo["worktime"];
    company.specialize = loginInfo["specialize"];
    company.image = this.company.image;
    this.restProvider.updateCompanyInfomation(company).then(() => {
      this.presentToast();
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Update infomation success',
      duration: 1000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      this.navCtrl.setRoot(AccountPage);
    });
    toast.present();
  }
}
