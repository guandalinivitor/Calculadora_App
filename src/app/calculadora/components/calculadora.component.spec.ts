import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../service';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir a soma de 1 + 3 = 4', () => {
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual(4);
    });
});
