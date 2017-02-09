import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tuple } from './tuple';


// const TABLE: Tuple[] = [{ values: ['col1','col2']},{ values: ['a','v']},{ values: ['x','a']},{ values:['a,','s,']}];

@Injectable()
export class TableService {
    private tableUrl = 'api/getData';

    constructor(private http: Http) {}

    getTable(id: string): Promise<Tuple[]> {
        console.log(id);
        const url = `${this.tableUrl}/${id}`;
        // return Promise.resolve(TABLE);
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Tuple[])
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

