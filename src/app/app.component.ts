import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  open: boolean = true;
  disabled: boolean = true;

  ngOnInit(): void {

  }

  log(isOpened: boolean) {
    console.log(isOpened);
  }
}