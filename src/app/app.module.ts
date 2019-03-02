import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmbedVideo } from 'ngx-embed-video';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CollapseModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { VideoCardsComponent } from './video-cards/video-cards.component';
import { VdCardComponent } from './vd-card/vd-card.component';
import { MoreVideosComponent } from './more-videos/more-videos.component';
import { VideoService } from './video.service';
import { VdPlayerComponent } from './vd-player/vd-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    VideoCardsComponent,
    VdCardComponent,
    MoreVideosComponent,
    VdPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmbedVideo.forRoot(),
    AngularFontAwesomeModule,
    CollapseModule.forRoot()
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
