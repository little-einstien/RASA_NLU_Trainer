import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'intent-list',
  templateUrl: './intent-list.html',
  styleUrls: ['./intent-list.css']
})
export class IntentListModule {

  intents =  ["intent1","intent2","intent1","intent2"];
  intent = "";

}
