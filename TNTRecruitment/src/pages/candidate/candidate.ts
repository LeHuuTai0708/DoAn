import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProfileScreenPage } from '../profile-screen/profile-screen';
import { UsersAccount } from '../../Models/Users';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

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
  id: String;
  user: UsersAccount;
  check: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private app: App, public restProvider: RestProvider) {
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
    console.log('ionViewDidLoad CandidatePage');
  }

  ProScreen(){
    this.navCtrl.push(ProfileScreenPage);

  }
}
