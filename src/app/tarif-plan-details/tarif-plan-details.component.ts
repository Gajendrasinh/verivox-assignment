import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'verivox-tarif-plan-details',
  templateUrl: './tarif-plan-details.component.html',
  styleUrls: ['./tarif-plan-details.component.scss']
})
export class TarifPlanDetailsComponent implements OnInit{

  @Input() planId: any;

  constructor(){

  }

  ngOnInit(): void {
      console.log(this.planId)
  }

}
