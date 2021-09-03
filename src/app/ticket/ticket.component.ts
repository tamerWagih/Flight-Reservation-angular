import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  user: any;
  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {}
}
