import { RestProvider } from './../../providers/rest/rest';
import { Recruitment } from './../../Models/Recruitment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddRecruitmentPage } from '../add-recruitment/add-recruitment';
import { RecruitmentDetailPage } from '../recruitment-detail/recruitment-detail';
import { CompanyDetailPage } from '../company-detail/company-detail';
import { Storage } from '@ionic/storage';
import { UsersAccount } from '../../Models/Users';

/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruitment',
  templateUrl: 'recruitment.html',
})
export class RecruitmentPage {
  RecruitmentData: Recruitment[];
  id: String;
  user: UsersAccount;
  check: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private app: App, public restProvider: RestProvider) {
    this.restProvider.getRecruitmentData().then(data => {
      this.RecruitmentData = JSON.parse(JSON.stringify(data));
    })
    this.storage.get("AccountID").then((data) => {
      this.id = data;
      this.restProvider.getUserInfomation(this.id).then((data) => {
        this.user = JSON.parse(JSON.stringify(data));
        this.SettingRecruitment().then((data) => {
          this.check = data;
        });
      });
    });
  }
  SettingRecruitment(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.user.type == "student") {
        resolve(false);
      }else
      resolve(true);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
  }

  presentAlert() {
    this.navCtrl.push(RecruitmentDetailPage);
  }
  CreateRecruitment() {
    this.navCtrl.push(AddRecruitmentPage);
  }

  RecruitmentDetail(){
    this.navCtrl.push(RecruitmentDetailPage);
  }

  DetailCompany(id)
  {
    this.navCtrl.push(CompanyDetailPage,{id : id});
  }
}
