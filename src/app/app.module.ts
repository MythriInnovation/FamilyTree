import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StorageService} from 'app/shared/storage.service';
// import {PopupModule} from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
 
    BrowserModule,
    FormsModule,
    HttpModule,
    //PopupModule.forRoot(),
    AppRoutingModule
    //routingComponents,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
     {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

