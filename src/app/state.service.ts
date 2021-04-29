import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  http: any;

  getStates(){
    return this.http.get('${this.apiBaseUrl}states')
  }

  getDistricts(){
    return this.http.get('${this.apiBaseUrl}districts/?state_id=$(stateId)')
  }
      
    }


  


