import { Directive, InjectionToken, Input, TemplateRef } from '@angular/core';

export const INNER_ROW_COMPONENT = new InjectionToken<InnerRowComponent>('InnerRowComponent');

@Directive({
    selector: '[inner-row-component], [innerRowComponent]',
    providers: [{ provide: INNER_ROW_COMPONENT, useExisting: InnerRowComponent }],
})
export class InnerRowComponent {

    @Input() innerRowComponent : string = '';
    constructor(public template: TemplateRef<any>) { }

}
