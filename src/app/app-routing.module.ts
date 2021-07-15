import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaferoomComponent } from './saferoom/saferoom.component';

const routes: Routes = [
  {
    path: "saferoom",
    component: SaferoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
