import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModuleComponent } from './module/module.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, StateComponent, ModuleComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [HttpClientModule],
})
export class AppModule { }
5
