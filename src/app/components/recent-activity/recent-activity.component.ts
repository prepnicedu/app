import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  template: `
    <section class="panel">
      <h3>Recent Activity</h3>
      <ul>
        <li><strong>Olivia</strong> merged onboarding fixes · 18m ago</li>
        <li><strong>Aryan</strong> updated auth middleware · 42m ago</li>
        <li><strong>Mina</strong> reviewed pull request #214 · 1h ago</li>
      </ul>
    </section>
  `,
  styleUrl: './recent-activity.component.css'
})
export class RecentActivityComponent {}
