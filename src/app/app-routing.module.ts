import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WildPageComponent} from "./pages/wild-page/wild-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {ForbiddenPageComponent} from "./pages/forbidden-page/forbidden-page.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'demo', loadChildren: () => import('../modules/demo/demo.module').then(m => m.DemoModule), canActivate: [AuthGuard] },
  {path: 'core', loadChildren: () => import('../modules/core/core.module').then(m => m.CoreModule)},
  {path: 'error', component: ErrorPageComponent},
  {path: 'forbidden', component: ForbiddenPageComponent},
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'}, // redirect to
  {path: '**', component: WildPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
