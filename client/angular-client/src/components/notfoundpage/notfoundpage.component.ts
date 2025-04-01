import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-notfoundpage',
  standalone: true,
  imports: [],
  templateUrl: './notfoundpage.component.html',
  styleUrl: './notfoundpage.component.css'
})
export class NotfoundpageComponent implements OnInit {

  readonly router = inject(Router)
  seconds: number = 5;

  constructor( ) { }

  ngOnInit(): void {
      this.redirect();
  }

  private async redirect() {
    let seconds = this.seconds
    interval(1000).pipe(
      takeWhile(value => value < seconds)
    ).subscribe((value) => {
      const remainingSeconds = seconds - value - 1;
      this.seconds = remainingSeconds;

      if (remainingSeconds === 0) {
        this.router.navigate(['/home']);
      }
    });
  }
}
