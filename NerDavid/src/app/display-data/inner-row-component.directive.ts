import { Directive, InjectionToken, Input, TemplateRef } from '@angular/core';

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const INNER_ROW_COMPONENT = new InjectionToken<InnerRowComponent>('InnerRowComponent');

/** Used to flag tab labels for use with the portal directive */
@Directive({
    selector: '[inner-row-component], [innerRowComponent]',
    providers: [{ provide: INNER_ROW_COMPONENT, useExisting: InnerRowComponent }],
})
export class InnerRowComponent {
    @Input() innerRowComponent : string = ' ';
    constructor(public template: TemplateRef<any>) { }

}
