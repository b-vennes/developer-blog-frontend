import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-attribute',
    templateUrl: './image-attribute.component.html',
    styleUrls: ['./image-attribute.component.scss']
  })
export class ImageAttributeComponent {
    @Input() attributeUrl: string;
    @Input() attributeName: string;
}
