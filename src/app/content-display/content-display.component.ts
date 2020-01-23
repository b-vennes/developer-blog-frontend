import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentDisplayComponent implements OnInit {
  @Input() contentData: string;

  constructor() { }

  ngOnInit() {
  }

}
