import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddRecruitmentPage } from '../add-recruitment/add-recruitment';
import { Recruitment } from '../../Models/Recruitment';
import { Observable } from 'rxjs';

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
  RecruitmentData : Recruitment[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertController: AlertController, public restProvider: RestProvider) {
      this.restProvider.getRecruitment().then((data) => {
        this.RecruitmentData = JSON.parse(JSON.stringify(data));
        console.log(this.RecruitmentData[0].title);
      });
  }
  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
  }
  presentAlert() {

  }
  CreateRecruitment() {
    this.navCtrl.push(AddRecruitmentPage);
  }
}
