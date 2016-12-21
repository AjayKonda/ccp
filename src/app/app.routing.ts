import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { LandingComponent } from './dashboard/app.landing';
import { DashboardComponent } from './dashboard/app.dashboard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/app.home';
import { WorkForUsComponent } from './home/app.workforus';
import { LoginComponent } from './login/app.login';
import { DownloadComponent } from './home/app.download';
import { PollComponent } from './notifications/app.poll';
import { NotificationComponent } from './notifications/app.notifications';
import { NotificationHistoryComponent } from './notifications/app.notificationhistory';

import { DashboardEventsComponent } from './events/dashboard.events';
import { MyEventsComponent } from './events/app.myevents';
import { CreateEventComponent } from './events/app.createevent';


import { MyWorkshopsComponent } from './workshops/app.myworkshops';
import { GuestLecturesComponent } from './guestlectures/app.guestlectures';
import { MyGuestLecturesComponent } from './guestlectures/app.myguestlectures';
import { CreateGuestLectureComponent } from './guestlectures/app.createguestlecture';
import { TutorProfileComponent } from './guestlectures/app.tutorprofile';

import { CreateWorkshopComponent } from './workshops/app.createworkshop';
import { WorkshopComponent } from './workshops/app.workshop';
import { WorkshopsComponent } from './workshops/app.workshops';

import { AboutUsComponent } from './home/app.aboutus';
import { GuestLectureDetailComponent } from './home/app.guestlecturedetail';
import { StartupDetailComponent } from './home/app.startupdetail';
import { WorkshopsDetailComponent } from './home/app.workshopsdetail';

// import { StartupsComponent } from './startups/app.startups';
// import { SponsorComponent } from './sponsor/app.sponsor';

import { HomeEventDetailComponent } from './home/app.eventdetail';

import { CreateAccountsComponent } from './accounts/app.createaccounts';
import { SMComponent } from './studentmanagement/sm';
import { StudentsComponent } from './studentmanagement/students';
import { EditAccountComponent } from './accounts/editaccount';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'workforus',
    component: WorkForUsComponent

  },
  {
    path: 'guestlectures',
    component: GuestLectureDetailComponent

  },
  {
    path: 'startups',
    component: StartupDetailComponent

  },
  {
    path: 'workshops',
    component: WorkshopsDetailComponent

  },
  {
    path: 'aboutus',
    component: AboutUsComponent

  },
  {
    path: 'events',
    component: HomeEventDetailComponent

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'getapp',
    component: DownloadComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'landing', component: LandingComponent },
          { path: 'notifications', component: NotificationComponent },
          { path: 'notificationhistory', component: NotificationHistoryComponent },
          { path: 'newevent', component: CreateEventComponent },
          { path: 'events', component: DashboardEventsComponent },
          { path: 'myevents', component: MyEventsComponent },
          { path: 'workshops', component: WorkshopsComponent },
          { path: 'myworkshops', component: MyWorkshopsComponent },
          { path: 'createworkshops', component: CreateWorkshopComponent },
          { path: 'findtutor', component: GuestLecturesComponent },
          { path: 'mytutors', component: MyGuestLecturesComponent },
          { path: 'tutorprofile/:id', component: TutorProfileComponent },
          { path: 'editaccount', component: EditAccountComponent },
          //   { path: 'startups', component: StartupsComponent },
          //   { path: 'sponsor', component: SponsorComponent },
          { path: 'poll', component: PollComponent },
          { path: 'account', component: CreateAccountsComponent },
          { path: 'studentmgmt', component: SMComponent },
          { path: 'students', component: StudentsComponent },
          { path: 'createguestlecture', component: CreateGuestLectureComponent },
          { path: 'workshop/:id', component: WorkshopComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]

  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);