import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { QuickActionComponent } from './components/quick-action/quick-action.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SectionCardComponent } from './components/section-card/section-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, StatCardComponent, QuickActionComponent, RecentActivityComponent, UserCardComponent, SectionCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly metrics = [
    { label: 'Daily Active Users', value: '12,480', delta: '+8.4%', tone: 'positive' as const },
    { label: 'Open Tickets', value: '37', delta: '-14%', tone: 'positive' as const },
    { label: 'Avg. Resolution', value: '2h 10m', delta: '+11%', tone: 'warning' as const },
    { label: 'Deployment Health', value: '99.2%', delta: '+0.6%', tone: 'positive' as const }
  ];
}
