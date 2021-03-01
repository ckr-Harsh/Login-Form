import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './auth/delete/delete.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
    {path:'',redirectTo:'/signin',pathMatch:'full'},
  // {path:'signin',component:SignInComponent},
  // {path:'signup', component:SignUpComponent},
  // {path:'demo',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
