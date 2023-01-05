import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFilterPipe } from './dynamic-filter.pipe';



@NgModule({
  declarations: [
    DynamicFilterPipe
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DynamicFilterPipe
  ],
  exports:[
    DynamicFilterPipe
  ]
})
export class DynamicFilterModule { }
