import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayReposComponent } from './display-repos/display-repos.component';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
   {path:"getUser", component:GetUserComponent},
  {path:"displayRepos",component:DisplayReposComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayReposComponent,
    GetUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
