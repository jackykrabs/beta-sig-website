import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { ExecComponent } from './pages/exec/exec.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AlumniComponent } from './pages/alumni/alumni.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent },
 { path: 'about', component: WhoWeAreComponent },
 { path: 'recruitment', component: RecruitmentComponent },
 { path: 'exec', component: ExecComponent },
 { path: 'gallery', component: GalleryComponent },
 { path: 'alumni', component: AlumniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
