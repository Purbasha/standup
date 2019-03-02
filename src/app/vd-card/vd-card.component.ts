import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-vd-card',
  templateUrl: './vd-card.component.html',
  styleUrls: ['./vd-card.component.css']
})
export class VdCardComponent implements OnInit {

  @Input() vd: any;
  @Input() indx: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.vd.Uri);
  }
}
