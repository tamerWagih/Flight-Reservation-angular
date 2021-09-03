import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableFlightsComponent } from './available-flights/available-flights.component';
import { BookingComponent } from './booking/booking.component';
import { SearchComponent } from './search/search.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'available-flights', component: AvailableFlightsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'ticket', component: TicketComponent },
  { path: '**', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
