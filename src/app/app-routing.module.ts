import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ResultListComponent } from './result-list/result-list.component';
import { TarifPlanDetailsComponent } from './tarif-plan-details/tarif-plan-details.component';

@Injectable({ 
  providedIn: 'root' 
})
export class TemplatePageTitleStrategy extends TitleStrategy {

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Verivox Insurance | ${title}`);
    }
  }
  
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarif-plans',
    pathMatch: 'full',
  },
  {
    path: 'tarif-plans',
    component: ResultListComponent,
    title: 'Tarif Plans'
  },

  {
    path: 'tarif-plan-details/:planId',
    component: TarifPlanDetailsComponent,
    title: 'Tarif Plans Details'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],

})

export class AppRoutingModule { }