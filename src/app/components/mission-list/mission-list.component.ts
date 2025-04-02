import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../../models/mission.model';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent {
  @Input() missions: Mission[] = [];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/mission', id]);
  }
}
