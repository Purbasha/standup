import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  vimeoUrl = 'https://vimeo.com/197933516';
  youtubeUrl = 'https://www.youtube.com/embed/iHhcHTlGtRs';
  dailymotionUrl =
    'https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport';


    vimeoUrl1 = 'https://vimeo.com/197933516';
    youtubeUrl1 = 'https://www.youtube.com/embed/iHhcHTlGtRs';
    dailymotionUrl1 =
      'https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport';

  vimeoId = '197933516';
  youtubeId = 'iHhcHTlGtRs';
  dailymotionId = 'x20qnej';
  iframe_html: any;
  iframe_html1: any;
  iframe_html2: any;
  iframe_html3: any;

  videoResult = [
    {
      id: 1,
      url: this.vimeoUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },
    {
      id: 2,
      url: '',
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },    
    {
      id: 3,
      url: this.youtubeUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },    
    {
      id: 4,
      url: this.dailymotionUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },    
    {
      id: 5,
      url: this.vimeoUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },    
    {
      id: 6,
      url: this.dailymotionUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },
        
    {
      id: 7,
      url: this.vimeoUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },
        
    {
      id: 8,
      url: this.dailymotionUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },
        
    {
      id: 9,
      url: this.youtubeUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    },
        
    {
      id: 10,
      url: this.vimeoUrl1,
      name: "Humpy trip",
	    description: "a memory of Humpy",
	    tags: ["Humpy", "Jitesh's video"],
	    views: 2,
	    languages: ["Hindi", "English"],
	    artists: ["Jitesh"]
    } 
  ];

  constructor(private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(this.vimeoUrl));
    console.log(this.embedService.embed(this.youtubeUrl));
    console.log(this.embedService.embed(this.dailymotionUrl));

    console.log(this.embedService.embed_vimeo(this.vimeoId));
    console.log(this.embedService.embed_youtube(this.youtubeId));
    console.log(this.embedService.embed_dailymotion(this.dailymotionId));
    this.iframe_html1 = this.embedService.embed(this.vimeoUrl);
    this.iframe_html2 = this.embedService.embed(this.youtubeUrl);
    this.iframe_html3 = this.embedService.embed(this.dailymotionUrl);
    // this.iframe_html = this.embedService.embed(this.youtubeUrl);
  }

  ngOnInit() {
  }

  getIframe(uri) {
    return this.embedService.embed(uri);
  }
}
