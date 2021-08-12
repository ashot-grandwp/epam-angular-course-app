import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';
import { ProvidersViewProvidersComponent } from './providers-view-providers.component';
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
  declarations: [
    ChildComponent,
    InspectorComponent,
    ProvidersViewProvidersComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    ProvidersViewProvidersComponent,
  ]
})
export class ProvidersViewProvidersModule { }
