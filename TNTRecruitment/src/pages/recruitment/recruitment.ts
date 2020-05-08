import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRecruitmentPage } from '../add-recruitment/add-recruitment';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
  }
  CreateRecruitment(){
    this.navCtrl.push(AddRecruitmentPage);
  }


}
