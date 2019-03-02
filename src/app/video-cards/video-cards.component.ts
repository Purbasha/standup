import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.css']
})
export class VideoCardsComponent implements OnInit {

  isCollapsed = false;
  isOpen = false;
  router;
  videoList;

  // videoList = [
  //   {
  //     category: 'Drama',
  //     list: [{
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://player.vimeo.com/video/197933516',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs"',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
  //       category: 'Drama'
  //     }
  //     ]
  //   },
  //   {
  //     category: 'Horror',
  //     list: [{
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://player.vimeo.com/video/197933516',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs"',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
  //       category: 'Drama'
  //     }
  //     ]
  //   },
  //   {
  //     category: 'Action',
  //     list: [{
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://player.vimeo.com/video/197933516',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs"',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
  //       category: 'Drama'
  //     },
  //     {
  //       name: 'Humpy trip',
  //       description: 'a memory of Humpy',
  //       tags: ['Humpy', 'Jitesh\'s video'],
  //       views: 2,
  //       languages: ['Hindi', 'English'],
  //       artists: ['Jitesh'],
  //       Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
  //       category: 'Drama'
  //     }
  //     ]
  //   }
  // ];

  constructor(route: Router, videoService: VideoService) {
    this.router = route;
    this.videoList = videoService.getVideos();
  }

  ngOnInit() {
  }

  loadMore(vdslst: any): void {
    // this.router.navigate(['/more'], {cat: vdslst.category});
    this.router.navigate(['more', { cat: vdslst.category }]);
  }
}
