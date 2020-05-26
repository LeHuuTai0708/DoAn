import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListApplicationPage } from './list-application';

@NgModule({
  declarations: [
    ListApplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(ListApplicationPage),
  ],
})
export class ListApplicationPageModule {}
