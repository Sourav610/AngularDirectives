import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;

  @HostListener('mouseenter') mouserOver(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouserLeave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit():void {
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
  }

}
