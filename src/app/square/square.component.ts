import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div> {{ value }} </div>
        `,
  styles: [
  ]
})
export class SquareComponent  {

@Input() value: 'X' | 'O';

}
