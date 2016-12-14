import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import {MyWifePage} from "./wife/mywife.page";
import {Menu} from "./menu";
import {RouterModule} from "@angular/router";
import {UWifePage} from "./wife/uwife.page";

@Component({
  selector: 'app',
  template: `
        <h1>{{slogan}}</h1>
        <div menu></div>
        <!-- embed of me-->
        <mywife></mywife>

        <!-- embed of router -->
        <hr />
        <router-outlet></router-outlet>
     `
})


export class AppComponent {
  slogan: string = "I love my wife most";
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: ':id', component: UWifePage },
    ]),
  ],
  declarations: [
    AppComponent, //bootstrap
    MyWifePage, //directive
    UWifePage,
    Menu, //directive attribute
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
