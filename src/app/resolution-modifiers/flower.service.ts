import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root' // provide this service in the root ModuleInjector

})
export class FlowerService {
  emoji = '🌸';
}
