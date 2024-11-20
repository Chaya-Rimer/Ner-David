import {Directive, InjectionToken, TemplateRef} from '@angular/core';

export const DISPLAY_ROW_CONTENT = new InjectionToken<DisplayRowContent>('DisplayRowContent');

@Directive({
  selector: '[display-row-content], [displayRowContent]',
  providers: [{provide: DISPLAY_ROW_CONTENT, useExisting: DisplayRowContent}],
})
export class DisplayRowContent {
    constructor(public template: TemplateRef<any>) {}
}