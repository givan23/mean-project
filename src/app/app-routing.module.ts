import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WildPageComponent} from "./pages/wild-page/wild-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/demo', pathMatch: 'full'}, // redirect to
  {path: 'auth', loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'demo', loadChildren: () => import('../modules/demo/demo.module').then(m => m.DemoModule)},
  {path: 'core', loadChildren: () => import('../modules/core/core.module').then(m => m.CoreModule)},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: WildPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
