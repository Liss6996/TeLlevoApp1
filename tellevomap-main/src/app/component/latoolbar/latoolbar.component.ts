import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latoolbar',
  templateUrl: './latoolbar.component.html',
  styleUrls: ['./latoolbar.component.scss'],
})
export class LatoolbarComponent implements OnInit {

  @Input() titulo : string;

  constructor() { }

  ngOnInit() {}

}
