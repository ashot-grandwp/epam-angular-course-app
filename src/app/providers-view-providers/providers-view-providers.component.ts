import { Component } from '@angular/core';
import { AnimalService } from './animal.service';
import { FlowerService } from './flower.service';

@Component({
  selector: 'app-providers-view-providers',
  templateUrl: './providers-view-providers.component.html',
  styleUrls: ['./providers-view-providers.component.css']
})
export class ProvidersViewProvidersComponent {

  constructor(public flower: FlowerService, public animal: AnimalService) { }

}
