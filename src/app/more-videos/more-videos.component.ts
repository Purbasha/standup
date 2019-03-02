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

  constructor(
    route: ActivatedRoute,
    videoService: VideoService,
    public location: Location) {
    route.params.subscribe(param => {
      console.log(param['cat']);
      const categoryName = param['cat'];
      this.videoList = videoService.getVideosForCategory(categoryName);
    });
  }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }
}
