import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecruitmentDetailPage } from './recruitment-detail';

@NgModule({
  declarations: [
    RecruitmentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecruitmentDetailPage),
  ],
})
export class RecruitmentDetailPageModule {}
