import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rand-rounded]',
})
export class RandRoundedDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    let parent: HTMLElement = this.elRef.nativeElement;
    let targetEl = parent.firstChild;
    this.renderer.addClass(targetEl, 'rand-rounded');
  }
}
