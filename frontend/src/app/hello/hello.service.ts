import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HelloService {

    constructor(private _http: Http) {}

    getTest() {
        return this._http.get(`${process.env.API_BASE_PATH}/test/get/json`)
            .map((res:Response) => res.json());
    }
}
