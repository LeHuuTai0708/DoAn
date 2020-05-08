import { CandidatePage } from './../candidate/candidate';
import { AccountPage } from './../account/account';
import { NotificationPage } from './../notification/notification';
import { RecruitmentPage } from './../recruitment/recruitment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
