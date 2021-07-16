import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RandButtonComponent } from './components';
import { RandRoundedDirective } from './directives';
import { RandOutlinedDirective } from './directives/rand-outlined.directive';
import { RandSelectComponent } from './components/rand-select/rand-select.component';

const COMPONENTS = [RandButtonComponent];
const DIRECTIVES = [
  RandRoundedDirective,
  RandOutlinedDirective,
  RandSelectComponent,
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class RandUIModule {}
