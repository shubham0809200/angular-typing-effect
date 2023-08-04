import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]'
})
export class TypingEffectDirective implements OnInit {
  @Input() appTypingEffect: string = '';
  private interval: any;
  private index: number = 0;
  private typingSpeed: number = 100; // Adjust typing speed as needed

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    this.interval = setInterval(() => {
      if (this.index === this.appTypingEffect.length) {
        this.index = 0;
      }

      const typedText = this.appTypingEffect.substring(0, this.index + 1);
      this.el.nativeElement.textContent = typedText;
      this.index++;
    }, this.typingSpeed);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
