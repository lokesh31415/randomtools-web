import { NgModule } from '@angular/core';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';

const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [],
  exports: [...COMPONENTS],
})
export class SharedModule {}
