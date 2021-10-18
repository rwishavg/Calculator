import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  calculateByBodmasRule(input: string) {
    let exp = input;
    const newchar = '*(';
    if (input[0] !== '(') {
      exp = exp.split('(').join(newchar);
    }
    // tslint:disable-next-line: no-eval
    const final = eval(exp);
    return final;
  }

  calculateNormal(firstNum: number, secondNum: number, operation: string) {
    let final: number;
    if (operation === '+') {
      final = firstNum + secondNum;
    } else if (operation === '-') {
      final = firstNum - secondNum;
    } else if (operation === '*') {
      final = firstNum * secondNum;
    } else if (operation === '/') {
      final = firstNum / secondNum;
    }
    return final;
  }
}
