import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WildPageComponent} from './pages/wild-page/wild-page.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CoreModule} from "../modules/core/core.module";
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';
import {MaterialModule} from "../modules/material/material.module";

@NgModule({
  declarations: [
    WildPageComponent,
    ErrorPageComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForbiddenPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CoreModule,
    MaterialModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
