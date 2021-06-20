import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RandButtonComponent } from './components';
import { RandRoundedDirective } from './directives';

const COMPONENTS = [RandButtonComponent];
const DIRECTIVES = [RandRoundedDirective];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class RandUIModule {}
