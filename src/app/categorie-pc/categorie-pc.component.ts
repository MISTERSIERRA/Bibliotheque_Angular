import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-categorie-pc',
  templateUrl: './categorie-pc.component.html',
  styleUrls: ['./categorie-pc.component.scss']
})
export class CategoriePcComponent implements OnInit {

  public showContainer: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }
}
