import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BodmasCalcComponent } from './bodmas-calc/bodmas-calc.component';

const routes: Routes = [
  { path: '', redirectTo: '/bodmas-calc', pathMatch: 'full' },
  { path: 'calc', component: CalcComponent },
  { path: 'bodmas-calc', component: BodmasCalcComponent },
  { path: 'error', component: ForbiddenComponent },
  { path: '**', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [CalcComponent, ForbiddenComponent, BodmasCalcComponent];
