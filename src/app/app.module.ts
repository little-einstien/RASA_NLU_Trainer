import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IntentListModule } from './intent-list/intent-list.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    IntentListModule,
    SideNavModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [IntentListModule,AppComponent,SideNavModule]
})
export class AppModule { }
