import { Component, Input } from '@angular/core';

@Component({
  selector: 'state',
  template: `<h1>State {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class StateComponent  {
  @Input() name: string;
}
