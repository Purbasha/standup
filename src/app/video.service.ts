import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  categories = [
    {
      category: 'Drama',
      thumnail: 'https://img.youtube.com/vi/QO79orOvYJA/0.jpg'
    },
    {
      category: 'Horror',
      thumnail: 'https://img.youtube.com/vi/eu7k0kSvnUo/0.jpg'
    },
    {
      category: 'Action',
      thumnail: 'https://img.youtube.com/vi/zF34dRivLOw/0.jpg'
    }
  ];

  vidoes = [
    {
      category: 'Drama',
      list: [{
        name: 'Wild Life',
        description: 'Can curiosity may end shameless explained. True high on said mr on come. An do mr design at little myself wholly entire though. Attended of on stronger or mr pleasure. Rich four like real yet west get. Felicity in dwelling to drawings. His pleasure new steepest for reserved formerly disposed jennings.',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        // Uri: 'https://player.vimeo.com/video/197933516',
        Uri: 'https://www.youtube.com/embed/QO79orOvYJA',
        thumnail: 'https://img.youtube.com/vi/QO79orOvYJA/0.jpg',
        category: 'Drama'
      },
      {
        name: 'Nature Cure',
        description: 'Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described.',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/iHhcHTlGtRs"',
        thumnail: 'https://img.youtube.com/vi/iHhcHTlGtRs/0.jpg',
        category: 'Drama'
      },
      {
        name: 'Techno India',
        description: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off. ',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        // Uri: 'https://www.dailymotion.com/embed/video/x20qnej',
        Uri: 'https://www.youtube.com/embed/H4AgsMXrUCA',
        thumnail: 'https://img.youtube.com/vi/H4AgsMXrUCA/0.jpg',
        category: 'Drama'
      },
      {
        name: 'Gaurav Tech',
        description: 'Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected. He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence. John way sir high than law who week. Surrounded prosperous introduced it if is up dispatched. Improved so strictly produced answered elegance is. ',
        tags: ['Humpy', 'Jitesh\'s video'],
        views: 2,
        languages: ['Hindi', 'English'],
        artists: ['Jitesh'],
        Uri: 'https://www.youtube.com/embed/pvf0zSh3rDo',
        thumnail: 'https://img.youtube.com/vi/pvf0zSh3rDo/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/_uQrJ0TkZlc/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/iHhcHTlGtRs/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/iHhcHTlGtRs/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/cqyziA30whE/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/yGqP54lv9q4/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/mLr9FDCsh4A/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/SP7saBrQgps/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/WeLQpUC2IW4/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/rmd_Z0q-Ri4/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/eu7k0kSvnUo/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/iHhcHTlGtRs/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/n2dcP5ucfeU/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/6eMbQUaEijI/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/zF34dRivLOw/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/zF34dRivLOw/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/988UZFB0heA/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/x20qnej/0.jpg',
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
        thumnail: 'https://img.youtube.com/vi/iHhcHTlGtRs/0.jpg',
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

    return _.slice(homeVideos,0,1);
  }

  public getVideosForCategory(catName: string) {
    return _.filter(this.vidoes, ['category', catName]);
  }

  
  public getCategories() {
    return this.categories;
  }
}
