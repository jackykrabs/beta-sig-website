import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent },
 { path: 'about', component: WhoWeAreComponent },
 { path: 'recruitment', component: RecruitmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
