import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  RandButtonComponent,
  RandSelectComponent,
  RandUploadBoxComponent,
} from './components';
import {
  RandIconButtonDirective,
  RandOutlinedDirective,
  RandRoundedDirective,
} from './directives';

const COMPONENTS = [
  RandButtonComponent,
  RandSelectComponent,
  RandUploadBoxComponent,
];
const DIRECTIVES = [
  RandRoundedDirective,
  RandOutlinedDirective,
  RandIconButtonDirective,
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class RandUIModule {}
