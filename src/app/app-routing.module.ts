import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGateway } from 'src/gateways/auth.gateway';
import { BullBackHttpClient } from 'src/gateways/bull-back-http-client';
import { SessionStorageRepository } from 'src/repositories/session-storage.repository';
import { SessionGuardService } from 'src/services/guards/session.guard.service';
import { SessionService } from 'src/services/session.service';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [SessionGuardService] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SessionService, SessionStorageRepository, BullBackHttpClient, AuthGateway]
})
export class AppRoutingModule {}
