import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrouwErr, BehaviorSubject  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
 export class LaunchService {
  private data = new BehaviorSubject('')
  currentData = this.data.asObservable();

  launchDetails: any
  constructor(private http: HttpClient) { }

  set details(launchDet:any){
    this.launchDetails = launchDet
  }
  setLaunch(data:any) {
    this.data.next(data);
}
  
  getLaunch():Observable<any> {
    if(this.launchDetails){
      return of(this.launchDetails)
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100')
      .pipe(
        map((response) => response),
        tap((resp) =>{
          this.details = resp
        }),
        catchError((err) => this.handleError(err))
      );
    }
  }

  private handleError(error: Response):Observable<any> {
    return observableThrouwErr(error)
  }
}
