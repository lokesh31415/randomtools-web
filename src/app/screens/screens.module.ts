import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { RandUIModule } from '../randui/randui.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeComponent,
  PdfCompressComponent,
  ToolsComponent,
} from './components';
import { PdfConvertComponent } from './components/pdf-convert/pdf-convert.component';
import { ImageCompressComponent } from './components/image-compress/image-compress.component';

@NgModule({
  declarations: [HomeComponent, ToolsComponent, PdfCompressComponent, PdfConvertComponent, ImageCompressComponent],
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
