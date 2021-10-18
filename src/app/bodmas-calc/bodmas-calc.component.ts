import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-bodmas-calc',
  templateUrl: './bodmas-calc.component.html',
  styleUrls: ['./bodmas-calc.component.css']
})
export class BodmasCalcComponent implements OnInit {

  calcData: any;
  showResultFlag: boolean;

  constructor(private calcService: CalcService) {
    this.calcData = {};
    this.calcData.calcInput = '';
    this.showResultFlag = false;
  }

  ngOnInit(): void {
  }

  addOperation(operation: string) {
    const input = this.calcData.calcInput;
    const finalInput = input.concat(operation);
    this.calcData.calcInput = finalInput;
  }

  clearInput() {
    this.calcData.calcInput = '';
    this.showResultFlag = false;
  }

  showResult() {
    this.calcData.result = this.calcService.calculateByBodmasRule(this.calcData.calcInput);
    this.showResultFlag = true;
  }

}
