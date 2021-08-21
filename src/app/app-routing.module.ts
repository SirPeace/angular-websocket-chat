import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

let protectedRoutes: Routes = [{ path: 'chat', component: ChatComponent }];

if (!localStorage.getItem('auth')) {
  protectedRoutes = protectedRoutes.map((route) => ({
    path: route.path,
    component: NotAuthorizedComponent,
  }));
}

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  ...protectedRoutes,
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
