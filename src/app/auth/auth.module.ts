import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authRouting } from './auth-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, DeleteComponent],
  imports: [CommonModule, authRouting, ReactiveFormsModule],
  exports: [SignInComponent, authRouting, SignUpComponent, DeleteComponent],
  providers: [AuthGuard],
})
export class AuthModule {}
