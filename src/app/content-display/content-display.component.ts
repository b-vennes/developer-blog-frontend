import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss']
})
export class ContentDisplayComponent implements OnInit {
  @Input() contentData: string;

  constructor() { }

  ngOnInit() {
  }

}
