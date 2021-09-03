import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight, User } from '../types';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  @ViewChild('f') bookingForm?: NgForm;
  flight: any;
  user: User = {
    name: '',
    email: '',
    bookedFlight: [],
  };
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.flight = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    console.log(this.flight);
  }

  onSubmit() {
    this.user.name = this.bookingForm?.value.name;
    this.user.email = this.bookingForm?.value.email;
    this.user.bookedFlight = [...this.user.bookedFlight, this.flight];

    this.bookingForm?.reset();

    console.log(this.user);
    this.router.navigateByUrl('/ticket', { state: this.user });
  }
}
