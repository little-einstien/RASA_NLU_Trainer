import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  samples : Array<{intent: string, text: string,res: string}> = [];
  myControl: FormControl = new FormControl();

  text : string;
  response : string;
  intent:string;
  options = [
    'greet',
    'buy',
    'anger'
   ];
   texts = [
     'greet',
     'buy',
     'anger'
    ];
    responses = [
      'greet',
      'buy',
      'anger'
     ];

  constructor() { }




}
