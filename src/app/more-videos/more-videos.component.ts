import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-more-videos',
  templateUrl: './more-videos.component.html',
  styleUrls: ['./more-videos.component.css']
})
export class MoreVideosComponent implements OnInit {

  videoList: any;
  defaultVideo;

  constructor(
    route: ActivatedRoute,
    videoService: VideoService,
    public location: Location) {
    route.params.subscribe(param => {
      console.log(param['cat']);
      const categoryName = param['cat'];
      this.videoList = videoService.getVideosForCategory(categoryName);
      this.defaultVideo = this.videoList[0].list[0]; 
    });
  }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }

  
  playSelectedVideo(vd) {
    this.defaultVideo  = vd; 
  }
}
