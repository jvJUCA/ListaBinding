import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import JSConfetti from 'js-confetti'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seguro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.scss']
})

export class SeguroComponent {
  jsConfetti = new JSConfetti()
  apoliceForm: FormGroup;
  showResult = false;
  apoliceInfo: any = {};

  constructor(private fb: FormBuilder) {
    this.apoliceForm = this.fb.group({
      nome: ['', Validators.required],
      sexo: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(18)]],
      valorAutomovel: ['', [Validators.required, Validators.min(0)]]
    });
  }

  calcularApolice() {
    if (this.apoliceForm.valid) {
      const formData = this.apoliceForm.value;
      let percentual: number;
      let ReaisFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

      if (formData.sexo === 'M') {
        if (formData.idade <= 25) {
          percentual = 15;
        } else {
          percentual = 10;
        }
      } else {
        percentual = 8;
      }

      const valorApolice = (formData.valorAutomovel * percentual) / 100;

      this.apoliceInfo = {
        nome: formData.nome,
        valorAutomovel: ReaisFormatter.format(formData.valorAutomovel),
        valorApolice: ReaisFormatter.format(valorApolice),
        percentual: percentual
      };

      this.showResult = true;
    } else {
      Object.keys(this.apoliceForm.controls).forEach(key => {
        const control = this.apoliceForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}