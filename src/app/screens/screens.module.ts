import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { RandUIModule } from '../randui/randui.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent, ToolsComponent } from './components';

@NgModule({
  declarations: [HomeComponent, ToolsComponent],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    RandUIModule,
  ],
  exports: [HomeComponent],
})
export class ScreensModule {}
