import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-coming-soon',
  imports:[RouterLink],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
  }
}
