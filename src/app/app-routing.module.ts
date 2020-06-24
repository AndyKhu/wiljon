import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { LoginComponent } from './page/login/login.component';
import { TandaterimaComponent} from './page/tandaterima/tandaterima.component';
import { AuthGuard } from './helpers';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent, canActivate: [AuthGuard],children:[
    {path: '', redirectTo: 'tandaterima', pathMatch: 'full'},
    {path: 'tandaterima', component: TandaterimaComponent}
  ]},
  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
