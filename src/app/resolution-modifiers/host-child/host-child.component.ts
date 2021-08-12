import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';

// @ts-ignore
@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.css']
})
export class HostChildComponent {
  constructor(public flower: FlowerService) { }
}
