import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth-guard.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HomeEventDetailComponent } from './home/app.eventdetail';
import { AboutUsComponent } from './home/app.aboutus';
import { SliderComponent } from './home/app.slider';

import { GuestLectureDetailComponent } from './home/app.guestlecturedetail';
import { StartupDetailComponent } from './home/app.startupdetail';
import { WorkshopsDetailComponent } from './home/app.workshopsdetail';

import { TopHeaderComponent } from './home/app.topheader';
import { BigSliderComponent } from './home/app.bigslider';
import { HomeEventsComponent } from './home/app.events';
import { HomeWorkshopsComponent } from './home/app.workshops';
import { HomeStartupsComponent } from './home/app.startups';
import { HomeGuestLecturesComponent } from './home/app.guestlectures';
import { HomeTestimonialsComponent } from './home/app.testimonials';
import { LoginComponent } from './login/app.login';
import { HomeComponent } from './home/app.home';
import { WorkForUsComponent } from './home/app.workforus';
import { DashboardComponent } from './dashboard/app.dashboard';
import { LandingComponent } from './dashboard/app.landing';
import { DownloadComponent } from './home/app.download';
import { DashboardService } from './dashboard/app.dashboard.service';


import { NotificationService } from './notifications/app.notifications.service';
import { NotificationComponent } from './notifications/app.notifications';
import { PollComponent } from './notifications/app.poll';
import { NotificationHistoryComponent } from './notifications/app.notificationhistory';

import { CreateEventComponent } from './events/app.createevent';
import { DashboardEventsComponent } from './events/dashboard.events';
import { MyEventsComponent } from './events/app.myevents';
import { EventsService } from './events/app.events.service';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

import { WorkshopsComponent } from './workshops/app.workshops';
import { MyWorkshopsComponent } from './workshops/app.myworkshops';
import { CreateWorkshopComponent } from './workshops/app.createworkshop';
import { WorkshopComponent } from './workshops/app.workshop';
import { WorkshopService } from './workshops/app.workshop.service';

import { GuestLecturesComponent } from './guestlectures/app.guestlectures';
import { MyGuestLecturesComponent } from './guestlectures/app.myguestlectures';
import { TutorProfileComponent } from './guestlectures/app.tutorprofile';
import { CreateGuestLectureComponent } from './guestlectures/app.createguestlecture';
import { GuestLectureService } from './guestlectures/app.guestlectures.service';

import { CreateAccountsComponent } from './accounts/app.createaccounts';
import { EditAccountComponent } from './accounts/editaccount';
import { AccountsService } from './accounts/app.accounts.service';
import { SMComponent } from './studentmanagement/sm';
import { StudentsComponent } from './studentmanagement/students';
import { SMService } from './studentmanagement/sm.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';

// import { StartupsComponent } from './startups/app.startups';
// import { SponsorComponent } from './sponsor/app.sponsor';


@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule, ChartsModule],
  declarations: [AppComponent, HomeComponent, TopHeaderComponent, BigSliderComponent, HomeEventsComponent, HomeWorkshopsComponent,
    HomeStartupsComponent, PollComponent, EditAccountComponent, CreateAccountsComponent, SMComponent, StudentsComponent, CreateGuestLectureComponent, TutorProfileComponent, MyGuestLecturesComponent, GuestLecturesComponent, CreateWorkshopComponent, CreateEventComponent, DashboardEventsComponent, MyEventsComponent, HomeGuestLecturesComponent, HomeEventDetailComponent, HomeTestimonialsComponent, WorkForUsComponent, DownloadComponent, LoginComponent, WorkshopComponent, WorkshopsComponent, MyWorkshopsComponent, LandingComponent, UPLOAD_DIRECTIVES, DashboardComponent, NotificationComponent, NotificationHistoryComponent, AboutUsComponent, SliderComponent, GuestLectureDetailComponent, StartupDetailComponent, WorkshopsDetailComponent],
  providers: [AuthGuard, SMService, WorkshopService, AccountsService, GuestLectureService, EventsService, { provide: LocationStrategy, useClass: HashLocationStrategy }, DashboardService, NotificationService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
