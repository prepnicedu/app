import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-action',
  standalone: true,
  template: `
    <section class="panel">
      <h3>Quick Actions</h3>
      <button>Create Ticket</button>
      <button class="ghost">Invite Member</button>
    </section>
  `,
  styleUrl: './quick-action.component.css'
})
export class QuickActionComponent {}
