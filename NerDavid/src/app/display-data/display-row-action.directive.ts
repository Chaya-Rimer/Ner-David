import { Directive, InjectionToken, TemplateRef } from '@angular/core';
export const DISPLAY_ROW_ACTION = new InjectionToken<DisplayRowAction>('DisplayRowAction');

@Directive({
  selector: '[display-row-action], [displayRowAction]',
  providers: [{provide: DISPLAY_ROW_ACTION, useExisting: DisplayRowAction}],
})
export class DisplayRowAction {

  constructor(public $implicit: TemplateRef<any>) { }

}



