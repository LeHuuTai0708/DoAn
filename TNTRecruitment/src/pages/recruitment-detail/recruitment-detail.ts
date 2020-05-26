import { Recruitment } from './../../Models/Recruitment';
import { UsersAccount } from './../../Models/Users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { ListApplicationPage } from '../list-application/list-application';

/**
 * Generated class for the RecruitmentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruitment-detail',
  templateUrl: 'recruitment-detail.html',
})
export class RecruitmentDetailPage {
  tabBarElement: any;
  id: string;
  idRec: string;
  user: UsersAccount;
  check: boolean;
  recruitment: Recruitment;
  userList: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private app: App, public restProvider: RestProvider) {
    this.idRec = this.navParams.get("id");
    this.storage.get("AccountID").then((data) => {
      this.id = data;
      this.restProvider.getRecruitmentInfomation(this.idRec).then((data) => {
        this.recruitment = JSON.parse(JSON.stringify(data));
        this.restProvider.getUserInfomation(this.id).then((data) => {
          this.user = JSON.parse(JSON.stringify(data));
          console.log(this.user.type);
          this.SettingRecruitment().then((data) => {
            this.check = data;
            console.log(this.check);
          });
        });
      });
    });
  }
  SettingRecruitment(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.user.type == "student") {
        resolve(false);
      } else if (this.user.type == "company") {
        resolve(true);
      }
    });
  }
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentDetailPage');
  }

  itemList() {
    this.navCtrl.push(ListApplicationPage);
  }
  Apply() {

  }
}
