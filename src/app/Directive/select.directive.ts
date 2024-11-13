import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
@Directive({
  standalone: true,
  selector: '[select]',
})
export class SelectDirective {
  constructor(private templateRef: TemplateRef, private ViewContainerRef: ViewContainerRef) {}
  
  @Input({required: true}) selectFrom!: DataSource;
}