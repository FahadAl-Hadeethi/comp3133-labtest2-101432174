import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  @Input() year: string = '';
  @Input() launchStatus: string = '';
  @Input() landingStatus: string = '';

  @Output() yearChange = new EventEmitter<string>();
  @Output() launchStatusChange = new EventEmitter<string>();
  @Output() landingStatusChange = new EventEmitter<string>();
  @Output() resetFilters = new EventEmitter<void>();

  onReset() {
    this.yearChange.emit('');
    this.launchStatusChange.emit('');
    this.landingStatusChange.emit('');
    this.resetFilters.emit();
  }
}
