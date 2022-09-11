import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ArticlesandpostsListComponent } from './articlesandposts-list/articlesandposts-list.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { TeleconsultationsListComponent } from './teleconsultations-list/teleconsultations-list.component';

const routes: Routes = [
  {
    path:'doctorslist',
    component: DoctorListComponent
  },
  {
    path:'customerslist',
    component: CustomersListComponent
  },
  {
    path:'teleconsultationslist',
    component: TeleconsultationsListComponent
  },
  {
    path:'adddoctor',
    component: AddDoctorComponent
  },
  {
    path:'articles-and-posts',
    component: ArticlesandpostsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
