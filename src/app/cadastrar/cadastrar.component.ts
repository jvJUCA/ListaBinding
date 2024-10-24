import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})

export class CadastrarComponent {
  cadastrarForm: FormGroup;
  showResult = false;
  studentInfo: any = {};

  constructor(private fb: FormBuilder) {
    this.cadastrarForm = this.fb.group({
      ra: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastrarForm.valid) {
      this.studentInfo = this.cadastrarForm.value;
      this.showResult = true;
    } else {
      Object.keys(this.cadastrarForm.controls).forEach(key => {
        const control = this.cadastrarForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}