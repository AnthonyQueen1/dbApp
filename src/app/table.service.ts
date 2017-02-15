import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tuple } from './tuple';


// const TABLE: Tuple[] = [{ values: ['col1','col2']},{ values: ['a','v']},{ values: ['x','a']},{ values:['a,','s,']}];
@Injectable()
export class TableService {
    private tableUrl = 'api/getdata';

    constructor(private http: Http) {}

    getTable(id: string): Promise<Tuple[]> {
        const url = `${this.tableUrl}/${id}`;
        // return Promise.resolve(TABLE);
        this.http.get(url)
                        .toPromise()
                        .then((response) => { 
                           console.log(response.json());
                         });
        
        
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Tuple[])
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.resolve([[""]]);
    }

    getTableList(): Promise<String[]> {
        return Promise.resolve(['tab1','tab2','tab3']);
    }
}

