import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {



  constructor(private formbuiler: FormBuilder) {
    this.buildAtmForm();
  }
  ngOnInit(): void {
  }

  ATMFormGroup: any;
  
  totalDispensedNotes: number = 0;
  isTransactionInitiated: boolean = false;
  notesDispensable: Array<string> = [];

  availableNotes = {
    '2000': 2000,
    '500' : 500,
    '200' : 200,
    '100' : 100,
    '50'  : 50,
    '20'  : 20,
    '10'  : 10,
    '5'   : 5,
    '2'   : 2,
    '1'   : 1
  };


  buildAtmForm() {
    this.ATMFormGroup = this.formbuiler.group({
      money: ['', [Validators.required, Validators.min(1)]]
    });
  }

  atmSubmitHandler(withdrawalAmount:any) {
    let balanceOfTwoThousandNotes = this.twoThousandNotesDispenser(withdrawalAmount.money);
    this.fiveHundredNotesDispenser(balanceOfTwoThousandNotes);
    this.isTransactionInitiated = true;
    console.log(this.notesDispensable);
  }

  twoThousandNotesDispenser(totalAmount:any): number {
    let balance = totalAmount % this.availableNotes['2000'];
    if (balance) {
      let notes = Math.floor(totalAmount / this.availableNotes['2000']); 
      this.notesDispensable
        .push(`${notes} notes of 2000`);
    }
    return balance;
  }

  fiveHundredNotesDispenser(totalAmount:any): number {
    let balance = totalAmount % this.availableNotes['500'];
    if (balance) {
      let notes = Math.floor(totalAmount / this.availableNotes['500']);
      this.notesDispensable
        .push(`${parseFloat(`${notes}`)} notes of 500`);
    }
    return balance;
  }

  notesDispenser() {

  }


}

