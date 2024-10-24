import { Routes } from '@angular/router';
import { NotasComponent } from './notas/notas.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SeguroComponent } from './seguro/seguro.component';

export const routes: Routes = [
    {path: 'notas', component: NotasComponent},
    {path: 'calculadora', component: CalculadoraComponent},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'seguro', component: SeguroComponent},
    { path: '', redirectTo: '/notas', pathMatch: 'full' }
];
