import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
