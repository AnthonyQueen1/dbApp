import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tuples = [
      { values: ['a','v']},
      { values: ['x','a']},
      { values:['a,','s,']}
    ];
    return {tuples};
  }
}