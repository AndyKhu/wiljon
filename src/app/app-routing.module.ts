import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
