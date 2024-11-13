import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '';
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }
  constructor(private el :ElementRef) { 
  
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
