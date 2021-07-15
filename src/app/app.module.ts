import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { Game1Component } from './game1/game1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Game2Component } from './game2/game2.component';
import { Game2createroomComponent } from './game2createroom/game2createroom.component';
import { ComicComponent } from './comic/comic.component';
import { ForumComponent } from './forum/forum.component';
import { CardsComponent } from './cards/cards.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ComicroomComponent } from './comicroom/comicroom.component';

@NgModule({
  declarations: [
    AppComponent,
    SaferoomComponent,
    Game1Component,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    Game2Component,
    Game2createroomComponent,
    ComicComponent,
    ForumComponent,
    CardsComponent,
    ActivitiesComponent,
    ComicroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
