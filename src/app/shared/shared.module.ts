import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RandUIModule } from '../randui/randui.module';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';

const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [FormsModule, BrowserModule, RandUIModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
