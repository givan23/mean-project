import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from "./core-routing.module";
import { PositionerComponent } from './components/positioner/positioner.component';


@NgModule({
  declarations: [
    CoreComponent,
    PositionerComponent
  ],
  exports: [
    PositionerComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {
}
