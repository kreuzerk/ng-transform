import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {

  @Input({transform: booleanAttribute}) something!: boolean;
  @Input({transform: booleanAttribute}) else!: boolean;
  @Input() elser!: string;
}
