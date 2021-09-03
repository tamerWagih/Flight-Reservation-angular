import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../types';

@Component({
  selector: 'app-available-flights',
  templateUrl: './available-flights.component.html',
  styleUrls: ['./available-flights.component.css'],
})
export class AvailableFlightsComponent implements OnInit {
  flights: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.flights = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {}

  book(flight: Flight) {
    this.router.navigateByUrl('/booking', { state: flight });
  }
}
