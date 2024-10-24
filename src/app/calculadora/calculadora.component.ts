import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  calculatorForm: FormGroup;
  showResult = false;
  result = '';

  constructor(private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      num1: ['', Validators.required],
      num2: ['', Validators.required],
      operation: ['+', Validators.required]
    });
  }

  calculate() {
    if (this.calculatorForm.valid) {
      const num1 = parseFloat(this.calculatorForm.get('num1')?.value);
      const num2 = parseFloat(this.calculatorForm.get('num2')?.value);
      const operation = this.calculatorForm.get('operation')?.value;

      let calculatedResult: number | string;
      
      switch (operation) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          calculatedResult = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
          break;
        default:
          calculatedResult = 'Operação inválida';
      }

      this.result = typeof calculatedResult === 'number' ? calculatedResult.toFixed(2) : calculatedResult;
      this.showResult = true;
    }
  }
}