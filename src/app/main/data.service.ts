import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    key = '005e7c1d6f6c4f9bacac16760286e3cd';
    id = '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6';
    dataUrl = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${this.key}/koop/${this.id}/`;

    // during development appeared CORS issue which should be disabled on backend by setting header to the server reponse,
    // to solve that was enabled plugin for chrome

    constructor(private http: HttpClient) { }

    getItem(): Observable<{}> {
        return this.http.get(this.dataUrl);
    }
}
