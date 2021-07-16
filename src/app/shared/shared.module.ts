import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RandUIModule } from '../randui/randui.module';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';
import { ToolComponent } from './components/tool/tool.component';
import { ToolsGroupComponent } from './components/tools-group/tools-group.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ToolComponent,
  ToolsGroupComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [FormsModule, BrowserModule, RandUIModule, RouterModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
