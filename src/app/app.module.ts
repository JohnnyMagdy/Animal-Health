import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxRerenderModule } from 'ngx-rerender';


import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { TeleconsultationsListComponent } from './teleconsultations-list/teleconsultations-list.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ArticlesandpostsListComponent } from './articlesandposts-list/articlesandposts-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoginComponent } from './login/login.component';


import { AuthTokenInterceptor } from './auth-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    DataTableComponent,
    CustomersListComponent,
    TeleconsultationsListComponent,
    AddDoctorComponent,
    PaginatorComponent,
    ScheduleComponent,
    ArticlesandpostsListComponent,
    CustomerDetailsComponent,
    AppointmentComponent,
    AppointmentCardComponent,
    EditArticleComponent,
    EditPostComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxRerenderModule,
  ],
  exports: [ScheduleComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
