import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img'
})
export class LazyImageDirective {
  
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    debugger;
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
