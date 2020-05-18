import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  GioiTinh : string[] = ["Nam", "Nữ", "Khác"]
  KinhNghiem : string[] = ["1 năm", "2 năm", "3 năm", "4 năm","5 năm"]
  TrinhDo : string[] = ["Đại học", "Sinh viên", "Đi làm"]
  MucLuong : string[] = ["5 - 1- triệu", "1 - 15 triệu", "15 - 20 triệu", "Khác"]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentDetailPage');
  }
  Login(){

  }
}
