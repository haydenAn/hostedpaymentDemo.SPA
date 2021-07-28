import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BluesnapService {
  baseUrl:string = "http://localhost:4200/";
  auth : string = environment.bsEncodedAuth;
  BSUrl : string = environment.bsGettokenPOSTUrl;


  constructor(private http: HttpClient) { }

  // getDocData(id: number): Observable<any>{
  //   let url = this.baseUrl + `docData/${id}`; //whateverthatis
  //   return this.http.get<DocModel>(url , {observe: "response" });
  // }

  generateToken(): Observable<any>{
      const headers = {
              'content-type': 'application/json',
      'Accept' : 'application/json',
      "Authorization" : `Basic ${environment.bsEncodedAuth}`
      }
     const body ={};
     return  this.http.post<any>(this.BSUrl,body,{observe: "response", headers: headers})
  }

  // sendMsg(msg: MsgModel): Observable<any>{
  //   let url = this.baseUrl + 'msg'
  //   const headers = { 'content-type': 'application/json'}  
  //   const body = JSON.stringify(msg);
  //   console.log(body)
  //    return this.http.post<MsgModel>(url, body,{observe: "response", headers: headers})
  // }
}
