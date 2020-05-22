import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the ListApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-application',
  templateUrl: 'list-application.html',
})
export class ListApplicationPage {
  ListApplication : string[] = ["1","2","3"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListApplicationPage');
  }

  itemApplication(){
    this.navCtrl.push(AccountPage);

}
}
