import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AppComponent } from '../app.component';
import { WeatherDialogData } from '../models/weather';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: 'weather-dialog.component.html',
})
export class WeatherDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WeatherDialogData) {}

  okClick(): void {
    this.dialogRef.close();
  }

  get humidity() {
    return (this.data.humidity * 100).toFixed(1);
  }

  get windSpeed() {
    return (this.data.windSpeed * 3.6).toFixed(1);
  }
}
