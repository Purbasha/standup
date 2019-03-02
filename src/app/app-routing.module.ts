import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCardsComponent } from './video-cards/video-cards.component';
import { MoreVideosComponent } from './more-videos/more-videos.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: VideoCardsComponent },
  { path: 'more', component: MoreVideosComponent },
  { path: 'more/:cat', component: MoreVideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
