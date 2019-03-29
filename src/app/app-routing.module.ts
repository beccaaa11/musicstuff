import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ArtistsComponent} from './Music/artists.component';
import {SearchComponent} from './Search/search.component';
const appRoutes: Routes= [
{path :'artists', component: ArtistsComponent},
{path:'search', component: SearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
  RouterModule,
  ]
})
export class AppRoutingModule { }
