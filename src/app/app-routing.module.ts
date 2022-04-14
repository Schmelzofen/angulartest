import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SamplelistComponent } from './samplelist/samplelist.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginformComponent },
  { path: 'samplelist', component: SamplelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
