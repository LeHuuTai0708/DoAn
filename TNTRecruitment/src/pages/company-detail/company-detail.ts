import { Company } from './../../Models/Users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CompanyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-detail',
  templateUrl: 'company-detail.html',
})
export class CompanyDetailPage {
  tabBarElement: any;
  id: string;
  company: Company;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.id = this.navParams.get("id");
    this.restProvider.getCompanyInfomation(this.id).then((data) => {
      this.company = JSON.parse(JSON.stringify(data));
    });
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDetailPage');
  }
}


