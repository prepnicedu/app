import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-card',
  standalone: true,
  template: `
    <section class="panel">
      <h3>{{ title }}</h3>
      <ng-content></ng-content>
    </section>
  `,
  styleUrl: './section-card.component.css'
})
export class SectionCardComponent {
  @Input({ required: true }) title = '';
}
