import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { ICase } from './case.model';

@Injectable()
export class CaseService {
  constructor(private http: HttpClient) {}

  getCases():Observable<ICase> {
    return this.http.get<ICase>('http://localhost:8080/api/getCases/');
  }
}
