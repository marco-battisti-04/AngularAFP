import { Directive, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit {
  @Output() appLazyLoad = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.appLazyLoad.emit();
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
