import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './modules/app-common/components/pagenotfound/pagenotfound.component';
import { DetailsComponent } from './modules/landing-page/components/details/details.component';
import { WelcomeNoMarginComponent } from './modules/landing-page/components/examples/welcome-no-margin/welcome-no-margin.component';
import { WelcomeWithMarginCardComponent } from './modules/landing-page/components/examples/welcome-with-margin-card/welcome-with-margin-card.component';
import { MainComponent } from './modules/landing-page/components/main/main.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home", 
    pathMatch: "full"
  },
  {
    path: "home",
    component: MainComponent
  },
  {
    path: "exemplo1",
    component: WelcomeWithMarginCardComponent
  },
  {
    path: "exemplo2",
    component: WelcomeNoMarginComponent
  },
  {
    path: "details",
    component: DetailsComponent
  },
  {
    path:"**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
