import { Directive, ViewContainerRef, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})

export class MyNgIfDirective implements OnInit {

  constructor(private viewContainer : ViewContainerRef, private template: TemplateRef<Object>) { }
    ngOnInit() {
    const condition = true;

      if(condition) {
        console.log("condition", condition);
        this.viewContainer.createEmbeddedView(this.template);
      } else {
        this.viewContainer.clear();
      }
    }
 }
