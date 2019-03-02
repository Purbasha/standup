import { Component, OnInit, Input } from '@angular/core';
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
}
