import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFilterModule } from './dynamic-filter/dynamic-filter.module';
import { FilterExampleComponent } from './filter-example/filter-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFilterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
