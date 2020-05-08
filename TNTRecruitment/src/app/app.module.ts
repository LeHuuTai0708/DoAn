import { LoginPage } from './../pages/login/login';
import { CandidatePage } from './../pages/candidate/candidate';
import { NotificationPage } from './../pages/notification/notification';
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
    LoginPage

  ],
  imports: [
    BrowserModule,
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
