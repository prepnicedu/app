import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <article class="panel">
      <div class="avatar">NA</div>
      <div>
        <h3>Nora Adams</h3>
        <p>Product Lead</p>
      </div>
    </article>
  `,
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {}
