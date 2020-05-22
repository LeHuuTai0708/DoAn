import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileScreenPage } from '../profile-screen/profile-screen';

/**
 * Generated class for the CandidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidate',
  templateUrl: 'candidate.html',
})
export class CandidatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatePage');
  }

  ProScreen(){
    this.navCtrl.push(ProfileScreenPage);

  }
}
