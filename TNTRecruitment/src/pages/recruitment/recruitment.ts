import { RestProvider } from './../../providers/rest/rest';
import { Recruitment } from './../../Models/Recruitment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddRecruitmentPage } from '../add-recruitment/add-recruitment';
import { RecruitmentDetailPage } from '../recruitment-detail/recruitment-detail';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertController: AlertController, public restProvider: RestProvider) {
    this.restProvider.getRecruitmentData().then(data => {
      this.RecruitmentData = JSON.parse(JSON.stringify(data));
    })
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
}
