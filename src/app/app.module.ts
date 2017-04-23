import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './component/app/app.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {HeroesComponent} from './component/heroes/heroes.component';
import {HeroService} from './service/hero.service';
import {DashboardComponent} from './component/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
         : 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
]);
