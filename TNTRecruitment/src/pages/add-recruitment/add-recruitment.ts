import { Recruitment } from './../../Models/Recruitment';
import { UsersAccount, Company } from './../../Models/Users';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Md5 } from 'ts-md5/dist/md5';
import { RecruitmentPage } from '../recruitment/recruitment';

/**
 * Generated class for the AddRecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-recruitment',
  templateUrl: 'add-recruitment.html',
})
export class AddRecruitmentPage {
  tabBarElement: any;
  formAddRecruitment: any;
  id: string;
  user: UsersAccount;
  recruitment: Recruitment;
  company: Company;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public formBuilder: FormBuilder, public storage: Storage, public restProvider: RestProvider) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.formAddRecruitment = formBuilder.group({
      title: ['', Validators.required],
      vacancies: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      salary: ['', Validators.required],
      address: ['', Validators.required],
      detail: ['', Validators.required]
    });
    this.storage.get("AccountID").then((data) => {
      this.id = data;
      this.restProvider.getUserInfomation(this.id).then((data) => {
        this.user = JSON.parse(JSON.stringify(data));
      });
      this.restProvider.getCompanyInfomation(this.id).then((data) => {
        this.company = JSON.parse(JSON.stringify(data));
      });
    });
  }
  CreateRecruitment() {
    let _recruitment = this.formAddRecruitment.value;
    this.recruitment = new Recruitment();
    let _id = Md5.hashStr(_recruitment["title"]).toString();
    this.recruitment.id = _id;
    this.recruitment.companyid = this.user.id;
    this.recruitment.date = Date().toString();
    this.recruitment.companyName = this.company.name;
    this.recruitment.image = this.company.image;
    this.recruitment.title = _recruitment["title"];
    this.recruitment.vacancies = _recruitment["vacancies"];
    this.recruitment.amount = _recruitment["amount"];
    this.recruitment.description = _recruitment["description"];
    this.recruitment.salary = _recruitment["salary"];
    this.recruitment.address = _recruitment["address"];
    this.recruitment.detail = _recruitment["detail"];
    if (this.recruitment.title != "" && this.recruitment.vacancies != "" && this.recruitment.amount != ""
      && this.recruitment.description != "" && this.recruitment.salary != "" && this.recruitment.address != "") {
      this.restProvider.saveRecruitmentInfomation(this.recruitment).then(() => {
        this.navCtrl.push(RecruitmentPage);
      })
    } else {
      this.showError("Lỗi", "Bạn cần điền tất cả các form");
    }
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecruitmentPage');
  }
  Continue() {
    this.CreateRecruitment();
  }
  showError(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
