import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterExampleComponent } from './filter-example/filter-example.component';

const routes: Routes = [
  {path:"",component:FilterExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
