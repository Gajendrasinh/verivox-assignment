import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { DynamicSortPipe } from './pipes/dynamic-sort.pipe';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { TarifPlanDetailsComponent } from './tarif-plan-details/tarif-plan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    DynamicSortPipe,
    FilterOptionsComponent,
    TarifPlanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports : [FilterOptionsComponent],
  providers: [DynamicSortPipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
