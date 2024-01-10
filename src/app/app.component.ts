import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empty';

  form! : FormGroup;

  constructor(){
    this.form = new FormGroup({
      name : new FormControl(''),
      age : new FormControl(''),
      file1 : new FormControl(''),
      file2 : new FormControl(''),
      file3 : new FormControl('')
    })
  }

  submit(){
    console.log(this.form)
  }

}
