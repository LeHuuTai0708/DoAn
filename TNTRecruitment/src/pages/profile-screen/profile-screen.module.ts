import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileScreenPage } from './profile-screen';

@NgModule({
  declarations: [
    ProfileScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileScreenPage),
  ],
})
export class ProfileScreenPageModule {}
