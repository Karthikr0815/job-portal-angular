import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid var(--primary-color)');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#eff6ff');
    }
  }
}