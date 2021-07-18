import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  ImageCompressComponent,
  PdfCompressComponent,
  PdfConvertComponent,
  ToolsComponent,
} from './screens/components';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'pdf/compress', component: PdfCompressComponent },
  { path: 'pdf/convert', component: PdfConvertComponent },
  { path: 'image/compress', component: ImageCompressComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
