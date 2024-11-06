import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  //@Output() calculate = new EventEmitter<InvestmentInput>();

  // calculate = output<InvestmentInput>();
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');

  constructor(private investmentService: InvestmentService){

  }

  onSubmit(){
    //this.calculate.emit({initialInvestment: +this.initialInvestment(), annualInvestment: +this.annualInvestment(), expectedReturn: +this.expectedReturn(), duration: +this.duration()});
    this.investmentService.calculateInvestmentResults({initialInvestment: +this.initialInvestment(), annualInvestment: +this.annualInvestment(), expectedReturn: +this.expectedReturn(), duration: +this.duration()})
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
  }
}
