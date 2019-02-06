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

}
