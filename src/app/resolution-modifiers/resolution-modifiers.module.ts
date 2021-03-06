import { NgModule } from '@angular/core';
import { HostComponent } from './host/host.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    SkipselfComponent,
    ResolutionModifiersComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    ResolutionModifiersComponent
  ]
})
export class ResolutionModifiersModule { }
