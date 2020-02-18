import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';

  myForm: FormGroup

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName:  new FormControl('', Validators.required),
      lastName: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
          address: new FormGroup({
            address1: new FormControl(''),
            address2: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
          })
    });
  }
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); // true or false
    // console.log('firstName', form.value.firstName);
    // console.log('lastName', form.value.lastName);
    // console.log('age', form.value.age);
    // console.log('email', form.value.email);
    console.log(this.myForm.get('firstName').value);
    console.log(this.myForm.get('lastName').value);
    console.log(this.myForm.get('age').value);
    console.log(this.myForm.get('email').value);
  }
}
