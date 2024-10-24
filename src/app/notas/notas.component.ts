import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent {
  gradeForm: FormGroup;
  finalGrade: number = 0;
  isApproved: boolean = false;
  showResult: boolean = false;

  constructor(private fb: FormBuilder) {
    this.gradeForm = this.fb.group({
      ac1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      ac2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      ag: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      af: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  calculateGrade() {
    if (this.gradeForm.valid) {
      const grades = this.gradeForm.value;
      
      this.finalGrade = 
        (grades.ac1 * 0.15) + 
        (grades.ac2 * 0.30) + 
        (grades.ag * 0.10) + 
        (grades.af * 0.45);

      this.isApproved = this.finalGrade >= 5;
      this.showResult = true;
    }
  }
}