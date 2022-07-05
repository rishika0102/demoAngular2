import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultcolor :string = 'blue'
  @Input() Highlightedcolor : string = 'red'
    @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultcolor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mosueenter') mouseover(eventData: Event) {
    console.log("HostListener");
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.Highlightedcolor;
    // this.backgroundColor = 'blue';
  }
  // @HostListener('mosueleave') mouseleave(eventData: Event) {
  //   console.log("HostListener");
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  // }

}
