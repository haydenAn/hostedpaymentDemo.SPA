import { Component, OnInit } from '@angular/core';
// import { BlueSnapGateway, BlueSnapConfig } from 'bluesnap';
import { bsObj } from './bsObj';
import {BluesnapService} from '../services/bluesnap.service'
import { Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators'

// const bluesnapConfig = new BlueSnapConfig('Sandbox', environment.bsSandBoxUserName, environment.bsSandBoxUserName, '3.0');
// const gateway = new BlueSnapGateway(bluesnapConfig);
declare var bluesnap :any;

@Component({
  selector: 'app-paymentfield',
  templateUrl: './paymentfield.component.html',
  styleUrls: ['./paymentfield.component.css']
})

export class PaymentfieldComponent implements OnInit {
  token : string = "eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7ImNvbW1vbkp3dFBheWxvYWQiOnsiaWQiOiIxMjY3Nzc1MDMxMDIzMzA1NTI3MTMzMTciLCJkYXRlQ3JlYXRlZCI6MTYyNzQzNjEwNDk1NX0sIm1lcmNoYW50SWQiOjkxMzIwOSwic2VudHJ5Ijp7Im1lcmNoYW50IjpmYWxzZSwiYXBwcyI6W119fX0.JkIG37v6C2jslSluux7tQV5gRadw3_dTGaGGOCTAqlE._"
  constructor(private bsService : BluesnapService) { }

  ngOnInit(): void {
  this.bsService.generateToken().subscribe({
	next: data => {
		console.log(data)
	},
	error: error => {
		console.error('There was an error!', error);
	}
})
//   .pipe(
// 	map((res: any) => {
// 	  if (!res.response) {
// 		console.log('Error occurred.');
// 		throw new Error('Value expected!');
// 	  }
// 	  console.log(res)
// 	})
//   );
	// .subscribe(res =>{
	//   let location = res.headers.get('Location');
    //   console.log(res.headers, location, res)
    // },(err)=>{
    //   console.log(err)
    // })
  }


  setUpBS() {
		console.log("got triggered ")
		bluesnap.hostedPaymentFieldsCreate(bsObj);
	}


  do_when_clicking_submit_button() {
		bluesnap.hostedPaymentFieldsSubmitData(function (callback : any) {
			if (null != callback.cardData) {
				var fraudSessionId = callback.transactionFraudInfo.fraudSessionId;

				console.log('card type: ' + callback.cardData.ccType +
					', last 4 digits: ' + callback.cardData.last4Digits +
					', exp: ' + callback.cardData.exp +
					', issuing Country: ' + callback.cardData.issuingCountry +
					', isRegulatedCard: ' + callback.cardData.isRegulatedCard +
					', cardSubType: ' + callback.cardData.cardSubType +
					', binCategory: ' + callback.cardData.binCategory +
					', ccBin: ' + callback.cardData.ccBin +
					' and fraudSessionId: ' + fraudSessionId +
					', after that I can call final submit');
				// submit the form
			} else {
				var errorArray = callback.error;
				for (var i in errorArray) {
					console.log("Received error: tagId= " +
						errorArray[i].tagId + ", errorCode= " +
						errorArray[i].errorCode + ", errorDescription= " +
						errorArray[i].errorDescription);
				}
			}
		});
	}

}
