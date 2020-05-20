import { UsersAccount } from './../../Models/Users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

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
  id : string;
  user : UsersAccount;
  check : boolean;
  userList : string[] = ["1","2","3","4","5","6","7","8","9"]
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
        resolve(true);
      }else
      resolve(false);
    });
  }
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  GioiTinh : string[] = ["Nam", "Nữ", "Khác"]
  KinhNghiem : string[] = ["1 năm", "2 năm", "3 năm", "4 năm","5 năm"]
  TrinhDo : string[] = ["Đại học", "Sinh viên", "Đi làm"]
  MucLuong : string[] = ["5 - 1- triệu", "1 - 15 triệu", "15 - 20 triệu", "Khác"]
  
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentDetailPage');
  }
  Login(){

  }
}
