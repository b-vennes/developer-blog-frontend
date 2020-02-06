import { Component, OnInit, Input, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { SyntaxHighlightService } from '../_services/syntax-highlight.service';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentDisplayComponent implements OnInit, AfterViewChecked {
  @Input() contentData: string;

  highlighted = false;

  constructor(private syntaxHighlightService: SyntaxHighlightService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.syntaxHighlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
