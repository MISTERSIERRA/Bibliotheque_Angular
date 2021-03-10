import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-bloc-page',
  templateUrl: './bloc-page.component.html',
  styleUrls: ['./bloc-page.component.scss']
})
export class BlocPageComponent implements OnInit {

  public showContainer2: boolean;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer2 = true;
        } else {
          this.showContainer2 = false;
        }
      });
  }

}
