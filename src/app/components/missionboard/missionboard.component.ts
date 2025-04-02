import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';

// Child Components
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import { MissionListComponent } from '../mission-list/mission-list.component';

@Component({
  selector: 'app-missionboard',
  standalone: true,
  imports: [
    CommonModule,
    MissionFilterComponent,
    MissionListComponent
  ],
  templateUrl: './missionboard.component.html',
  styleUrls: ['./missionboard.component.css']
})
export class MissionboardComponent implements OnInit {
  missions: Mission[] = [];

  year: string = '';
  launchStatus: string = '';
  landingStatus: string = '';

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.spacexService.getAllMissions().subscribe((data) => {
      this.missions = data;
    });
  }

  filter(): void {
    this.spacexService.getAllMissions().subscribe((data) => {
      this.missions = data.filter((mission) => {
        const matchYear = this.year ? mission.launch_year === this.year : true;

        const matchLaunch =
          this.launchStatus === 'success'
            ? mission.launch_success === true
            : this.launchStatus === 'failed'
              ? mission.launch_success === false
              : true;

        const matchLanding =
          this.landingStatus === 'success'
            ? mission.rocket?.first_stage?.cores[0]?.land_success === true
            : this.landingStatus === 'failed'
              ? mission.rocket?.first_stage?.cores[0]?.land_success === false
              : true;

        return matchYear && matchLaunch && matchLanding;
      });
    });
  }

  reset(): void {
    this.year = '';
    this.launchStatus = '';
    this.landingStatus = '';
    this.loadAllMissions();
  }
}
