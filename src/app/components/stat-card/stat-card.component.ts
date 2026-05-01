import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  template: `
    <article class="ui-card">
      <span>{{ label }}</span>
      <h3>{{ value }}</h3>
      <small [class.warn]="tone === 'warning'">{{ delta }} vs last week</small>
    </article>
  `,
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value = '';
  @Input({ required: true }) delta = '';
  @Input() tone: 'positive' | 'warning' = 'positive';
}
