import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent
  ],
  imports: [
    MatStepperModule,
    MatChipsModule,
    MatFormFieldModule,
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CarouselModule,
    WavesModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  entryComponents:[MatExpansionPanel],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
