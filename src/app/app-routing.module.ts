import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ToolsComponent } from './screens/components';

const routes: Routes = [
  { path: 'landing-page', component: HomeComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'tools', component: ToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
