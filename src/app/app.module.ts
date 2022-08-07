import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DistrictsComponent } from './districts/districts.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { HomeComponent } from './home/home.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { ErnakulamComponent } from './ernakulam/ernakulam.component';
import { IdukkiComponent } from './idukki/idukki.component';
import { KasaragodComponent } from './kasaragod/kasaragod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { MalappuramComponent } from './malappuram/malappuram.component';
import { PalakkadComponent } from './palakkad/palakkad.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { TrivandrumComponent } from './trivandrum/trivandrum.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { WayanadComponent } from './wayanad/wayanad.component';
import { KannurComponent } from './kannur/kannur.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { GuideRegComponent } from './guide-reg/guide-reg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DistrictsComponent,
    LoginComponent,
    HelpComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    AlappuzhaComponent,
    ErnakulamComponent,
    IdukkiComponent,
    KasaragodComponent,
    KollamComponent,
    KottayamComponent,
    KozhikodeComponent,
    MalappuramComponent,
    PalakkadComponent,
    PathanamthittaComponent,
    TrivandrumComponent,
    ThrissurComponent,
    WayanadComponent,
    KannurComponent,
    HotelsComponent,
    FeedbackComponent,
    FooterComponent,
    GuideRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule,MatGridListModule,MatSnackBarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
