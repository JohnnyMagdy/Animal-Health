import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ArticlesandpostsListComponent } from './articlesandposts-list/articlesandposts-list.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoginComponent } from './login/login.component';
import { TeleconsultationsListComponent } from './teleconsultations-list/teleconsultations-list.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
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
  },
  {
    path:'edit-article',
    component:EditArticleComponent
  },
  {
    path:'edit-post',
    component:EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
