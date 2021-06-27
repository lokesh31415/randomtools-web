import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rand-outlined]',
})
export class RandOutlinedDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    let parent: HTMLElement = this.elRef.nativeElement;
    let targetEl = parent.firstChild as HTMLElement;
    console.log(targetEl);
    if (targetEl) {
      this.renderer.addClass(targetEl, 'rand-outlined');
    }
  }
}
