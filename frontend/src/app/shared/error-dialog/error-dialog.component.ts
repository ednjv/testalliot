import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-error-dialog',
  templateUrl: 'error-dialog.component.html',
})
export class ErrorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(): void {
    this.dialogRef.close();
  }
}
