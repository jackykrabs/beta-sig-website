import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    RecruitmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
