import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  calcData: any;
  showResultFlag: boolean;

  constructor(private calcService: CalcService) {
    this.calcData = {};
    this.calcData.calcFirstInput = '';
    this.calcData.calcSecondInput = '';
    this.showResultFlag = false;
  }

  ngOnInit(): void {
  }

  clearInput() {
    this.calcData.calcFirstInput = '';
    this.calcData.calcSecondInput = '';
    this.showResultFlag = false;
  }

  showResult(operation: string) {
    this.calcData.result = this.calcService.calculateNormal(this.calcData.calcFirstInput, this.calcData.calcSecondInput, operation);
    this.showResultFlag = true;
  }

}
