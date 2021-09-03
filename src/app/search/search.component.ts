import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import flights from '../data.json';
import { SearchedFlight } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm?: NgForm;
  searchedFlight: SearchedFlight = {
    from: '',
    to: '',
    date: '',
  };
  submitted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.searchedFlight.from = this.searchForm?.value.from;
    this.searchedFlight.to = this.searchForm?.value.to;
    this.searchedFlight.date = this.searchForm?.value.date;
    this.submitted = true;
    this.searchForm?.reset();
    this.searchFlights(this.searchedFlight);
  }

  searchFlights(searchedItem: SearchedFlight) {
    let foundFlights = flights.filter((flight) => {
      return (
        flight.from.toLowerCase() === searchedItem.from.trim().toLowerCase() &&
        flight.to.toLocaleLowerCase() === searchedItem.to.trim().toLowerCase()
      );
    });
    this.router.navigateByUrl('/available-flights', { state: foundFlights });
  }
}
