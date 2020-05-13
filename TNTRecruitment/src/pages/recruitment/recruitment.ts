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
  RecruitmentData: string[] = ["1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
  }
  
  presentAlert() {
    const alert = this.alertController.create({
      title: 'FPT Software',
      cssClass: ' custom-alert-danger',
      subTitle: '[HCM] 03 Senior Salesforce Developers',
      message: 'Develop and customize for customer’s systems base on Salesforce (Force.com and Apex Code\)\
      Opportunity to work on many business modules of Salesforce Join from system design stage with customer’s team. Working in Ho Chi Minh city Daily meeting with US customer from 7:00 AM ~ (VNT) or 10:00 PM ~ (VNT)',
      buttons: [{ 
        text: 'Apply',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }},
      { text: 'Back',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }}]
    });
    alert.present();
  }
  CreateRecruitment(){
    this.navCtrl.push(AddRecruitmentPage);
  }

  RecruitmentDetail(){
    this.navCtrl.push(RecruitmentDetailPage);
  }
}
