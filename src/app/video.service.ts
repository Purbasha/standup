import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  vidoes = [
    {
      category: 'Drama',
      list: [{
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        // Uri: 'https://player.vimeo.com/video/197933516',
        Uri: 'https://www.youtube.com/embed/QO79orOvYJA',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs"',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        // Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
        Uri: 'https://www.youtube.com/embed/H4AgsMXrUCA',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/pvf0zSh3rDo',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/cqyziA30whE',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/TqvwXg9WSkg',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/x1YGCzmxEoo',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/yGqP54lv9q4',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/mLr9FDCsh4A',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/SP7saBrQgps',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/WeLQpUC2IW4',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/rmd_Z0q-Ri4',
        category: 'Drama'
      }
      ]
    },
    {
      category: 'Horror',
      list: [{
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        // Uri: 'https://player.vimeo.com/video/197933516',
        Uri: 'https://www.youtube.com/embed/eu7k0kSvnUo',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs"',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        // Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
        Uri: 'https://www.youtube.com/embed/n2dcP5ucfeU',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/6eMbQUaEijI',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/zF34dRivLOw',
        category: 'Drama'
      }
      ]
    },
    {
      category: 'Action',
      list: [{
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://player.vimeo.com/video/197933516',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/988UZFB0heA"',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
        category: 'Drama'
      },
      {
        name: 'Humpy trip',
        description: 'a memory of Humpy',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs',
        category: 'Drama'
      }
      ]
    }
  ];

  constructor() { }

  public getVideos() {
    const homeVideos = [];
    _.forEach(this.vidoes, (category) => {
      console.log(category);
      const cat = _.cloneDeep(category);
      cat.list = [... (_.slice(category.list, 0, 4))];
      homeVideos.push(_.cloneDeep(cat));
    });

    return homeVideos;
  }

  public getVideosForCategory(catName: string) {
    return _.filter(this.vidoes, ['category', catName]);
  }
}
