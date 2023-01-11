import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayReposComponent } from './display-repos/display-repos.component';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
  {path:"getUser", component:GetUserComponent},
  {path:"displayRepos",component:DisplayReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
