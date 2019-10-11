import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraservice: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }  

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConCat: string): string {
    //caso contenha 0 ou null reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConCat === '.' && numAtual === '') {
      return '0.';
    }

    if (numConCat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConCat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraservice.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.resultado = null;
      this.numero2 = null;
      this.numero1 = this.resultado.toString();
    }
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraservice.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}
