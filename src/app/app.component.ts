import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  
  addChild(){
    this.samples.push({intent: "intent", text: "This is the sample text",res:"Response"});
    console.log(this.samples);
    if(this.samples[this.samples.length-1].intent && this.options.indexOf(this.samples[this.samples.length-1].intent)<=-1){
      this.options.push(this.samples[this.samples.length-1].intent);
    }
    console.log(this.options);
  }

  addText(){
    if(this.text){
      this.texts.push(this.text);
      this.text = "";
    }
  }
  addResponse(){
    if(this.response){
    this.responses.push(this.response);
    this.response = "";
  }


  }
}
