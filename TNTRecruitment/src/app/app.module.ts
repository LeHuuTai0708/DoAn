import { enviroment } from './../providers/rest/enviroment';
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
import { RegistrationPage } from '../pages/registration/registration';
import { AddRecruitmentPage } from '../pages/add-recruitment/add-recruitment';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase';

firebase.initializeApp(enviroment.firebase);
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
    AddRecruitmentPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    AddRecruitmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
