import { ListApplicationPage } from './../pages/list-application/list-application';
import { LoginPage } from './../pages/login/login';
import { CandidatePage } from './../pages/candidate/candidate';
import { RecruitmentPage } from './../pages/recruitment/recruitment';
import { AccountPage } from './../pages/account/account';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { RegistrationPage } from '../pages/registration/registration';
import { AddRecruitmentPage } from '../pages/add-recruitment/add-recruitment';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage';
import { NotificationPage } from '../pages/notification/notification';
import { ProfileScreenPage } from '../pages/profile-screen/profile-screen';
import { RecruitmentDetailPage } from '../pages/recruitment-detail/recruitment-detail';
import { CompanyDetailPage } from '../pages/company-detail/company-detail';
import { UpdateAccountPage } from '../pages/update-account/update-account';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AccountPage,
    RecruitmentPage,
    NotificationPage,
    CandidatePage,
    FirstPage,
    LoginPage,
    RegistrationPage,
    AddRecruitmentPage,
    ProfileScreenPage,
    RecruitmentDetailPage,
    CompanyDetailPage,
    UpdateAccountPage,
    ListApplicationPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AccountPage,
    RecruitmentPage,
    NotificationPage,
    CandidatePage,
    FirstPage,
    LoginPage,
    RegistrationPage,
    AddRecruitmentPage,
    ProfileScreenPage,
    RecruitmentDetailPage,
    CompanyDetailPage,
    UpdateAccountPage,
    ListApplicationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }
