import { RecruitmentPage } from './../recruitment/recruitment';
import { AccountPage } from './../account/account';
import { NotificationPage } from './../notification/notification';
import { CandidatePage } from './../candidate/candidate';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  recruitmentRoot = RecruitmentPage
  candidateRoot = CandidatePage
  notificationRoot = NotificationPage
  accountRoot = AccountPage


  constructor(public navCtrl: NavController) {}

}
