import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, CoreModule, AppRoutingModule, BrowserModule],
  exports: [HomeComponent],
})
export class ScreensModule {}
