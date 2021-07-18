import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rand-icon-button]',
})
export class RandIconButtonDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    let parent: HTMLElement = this.elRef.nativeElement;
    let targetEl = parent.firstChild as HTMLElement;
    if (targetEl) {
      this.renderer.addClass(targetEl, 'rand-icon-button');
    }
  }
}
