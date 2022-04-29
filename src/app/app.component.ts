import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click : boolean = true;
  onButtonClick(){
    this.click = !this.click;
  }
  onKey(event: KeyboardEvent) { 
    // if value is not empty the set click to false otherwise true
    this.click = (event.target as HTMLInputElement).value === '' ? true:false;
  }
}