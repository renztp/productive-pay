import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'focus-funds';
  showHeaderAndFooter: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const foo = this.route.url.pipe(map(
      url => {
        if (url[0].path === 'funds' && url[1].path === 'setup') {
          this.showHeaderAndFooter = false;
        } else {
          this.showHeaderAndFooter = true;
        }
      }
    ));

    foo.subscribe(
      () => {
        console.log(this.showHeaderAndFooter)
      }
    )
  }
}
