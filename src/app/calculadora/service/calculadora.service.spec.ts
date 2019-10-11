import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  //testa soma
  it('deve validar que 1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA)
    expect(soma).toEqual(5);
  }));

  //testa subtração
  it('deve validar que 1 - 4 = -3', inject([CalculadoraService], (service: CalculadoraService) => {
    let subtrai = service.calcular(1, 4, CalculadoraService.SUBTRACAO)
    expect(subtrai).toEqual(-3);
  }));

  //testa divisão
  it('deve validar que 1 / 4 = 0.25', inject([CalculadoraService], (service: CalculadoraService) => {
    let dividir = service.calcular(1, 4, CalculadoraService.DIVISAO)
    expect(dividir).toEqual(0.25);
  }));

  //testa multiplicação
  it('deve validar que 1 * 4 = 4', inject([CalculadoraService], (service: CalculadoraService) => {
    let multiplica = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO)
    expect(multiplica).toEqual(4);
  }));

  //testa operação inválida
  it('deve validar se houve uma operação inválida e retornar 0', inject([CalculadoraService], (service: CalculadoraService) => {
    let invalido = service.calcular(1, 4, '%')
    expect(invalido).toEqual(0);
  }));
});

