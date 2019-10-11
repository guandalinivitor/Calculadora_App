import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly MULTIPLICACAO: string = '*';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly SOMA: string = '+';    

  constructor() { }

/*
  Metodo que realiza o servico de calculo 
  @param num1 number é o primeiro numero a ser digitado
  @param num2 number é o segundo numero a ser digitado  
*/
  calcular(num1: number, num2: number, operacao: string): number { 
      let resultado: number;

      switch(operacao) { 
        case CalculadoraService.SOMA:
          resultado = num1 + num2;
        break;
        case CalculadoraService.DIVISAO:
          resultado = num1 / num2;
        break;
        case CalculadoraService.MULTIPLICACAO:
          resultado = num1 * num2; 
        break;
        case CalculadoraService.SUBTRACAO:
          resultado = num1 - num2;
        break;      
        default:
          resultado = 0;         
      }
      return resultado;
  }
}
