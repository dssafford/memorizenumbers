import { FocusDirective } from './focus.directive';
import {ElementRef, Renderer} from '@angular/core';

describe('FocusDirective', () => {
  it('should create an instance', () => {
    const directive = new FocusDirective(null,null );
    expect(directive).toBeTruthy();
  });
});
