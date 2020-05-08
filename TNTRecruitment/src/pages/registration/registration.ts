import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  Tinh : string[] = ["Hà Nội", "Lâm Đồng", "Hải Phòng", "Gia Lai"]
  ThanhPho : string[] = ["Hoàn Kiếm", "Đà Lạt", "Hồng Bàn", "Pleiku"]
  QuyMo: string[] = ["Lớn", "Nhỏ", "Vừa"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Login()
  {
    this.navCtrl.push(TabsPage);
  }
}
