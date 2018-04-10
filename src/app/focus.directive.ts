import {Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appfocus]'
})
export class FocusDirective implements OnInit{
  @Input('appfocus') focusEvent: EventEmitter<boolean>

  constructor(@Inject(ElementRef) private element: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.focusEvent.subscribe(event => {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    });
  }

}
