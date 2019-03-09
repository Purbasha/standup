import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vd-player',
  templateUrl: './vd-player.component.html',
  styleUrls: ['./vd-player.component.css']
})
export class VdPlayerComponent implements OnInit {

  
  @Input() vd: any;
  @Input() cat: any;
  @Input() indx: any;
  @Output() playVideoEvent = new EventEmitter<any>()
  router;

  constructor(route: Router) {
    this.router = route;
   }

  ngOnInit() {
    console.log('-------------');
  }

  loadMore(catName: string): void {
    // this.router.navigate(['/more'], {cat: vdslst.category});
    this.router.navigate(['more', { cat: catName }]);
  }

  playVideo() {
    this.playVideoEvent.emit(this.vd);
  }
}
