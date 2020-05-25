import { CandidatePage } from './../candidate/candidate';
import { AccountPage } from './../account/account';
import { NotificationPage } from './../notification/notification';
import { RecruitmentPage } from './../recruitment/recruitment';
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  RecruitmentData: Recruitment[];
  id: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private app: App, public restProvider: RestProvider) {
      this.restProvider.getRecruitmentData().then(data => {
        this.RecruitmentData = JSON.parse(JSON.stringify(data));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  Recruitment() {
    this.navCtrl.push(RecruitmentPage);
  }
  Notification() {
    this.navCtrl.push(NotificationPage);
  }
  Account() {
    this.navCtrl.push(AccountPage);
  }
  Candidate() {
    this.navCtrl.push(CandidatePage);
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
