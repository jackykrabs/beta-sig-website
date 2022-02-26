import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { ExecComponent } from './pages/exec/exec.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { PresidentsCornerComponent } from './presidents-corner/presidents-corner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    RecruitmentComponent,
    ExecComponent,
    GalleryComponent,
    AlumniComponent,
    PresidentsCornerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
