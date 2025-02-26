import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { ServerStatusComponent } from './Components/dashboard/server-status/server-status.component';
import { TicketsComponent } from './Components/dashboard/tickets/tickets.component';
import { TraficComponent } from './Components/dashboard/trafic/trafic.component';
import { DashboardItemComponent } from './Components/dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TraficComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
