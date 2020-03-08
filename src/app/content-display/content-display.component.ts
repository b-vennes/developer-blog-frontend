import { Component, OnInit, Input, ViewEncapsulation, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentDisplayComponent {
  @Input() contentPath: string;
}
