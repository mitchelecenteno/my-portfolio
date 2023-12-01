import { Component } from '@angular/core';
import { BIODATA_EDUCATION, BIODATA_EXPERIENCE } from './config';

@Component({
  selector: 'app-biodata-page',
  templateUrl: './biodata-page.component.html',
  styleUrls: ['./biodata-page.component.scss'],
})
export class BiodataPageComponent {
  bioEduc = BIODATA_EDUCATION;
  bioExp = BIODATA_EXPERIENCE;

  ngOnInit(): void {}
}
