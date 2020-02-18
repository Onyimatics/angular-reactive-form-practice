import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  constructor(private fb: FormBuilder) {}

  // myForm: FormGroup

  myForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    age: [''],
    email: [''],
    address: this.fb.group({
      address1: [''],
      address2: [''],
      state: [''],
      zip: ['']
    })
  })

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   firstName:  new FormControl('', Validators.required),
    //   lastName: new FormControl(''),
    //   age: new FormControl(''),
    //   email: new FormControl(''),
    //       address: new FormGroup({
    //         address1: new FormControl('', Validators.required),
    //         address2: new FormControl(''),
    //         state: new FormControl(''),
    //         zip: new FormControl('')
    //       })
    // });

 
  }

  updateModelPartially() {
    this.myForm.patchValue({
      firstName: 'Jimmy',
      address: {
        address1: 'Amboseli Apartment'
      }
    })
  }

  onSubmit(form) {
    console.log('Valid?', form.valid); // true or false
    console.log('firstName', form.value.firstName);
    console.log('lastName', form.value.lastName);
    console.log('age', form.value.age);
    // console.log('email', form.value.email);
    // console.log(this.myForm.get('firstName').value);
    // console.log(this.myForm.get('lastName').value);
    // console.log(this.myForm.get('age').value);
    // console.log(this.myForm.get('email').value);
    // console.log(this.myForm.get(['address', 'address1']).value);
    // console.log(this.myForm.get('address').get('address2').value);
    // console.warn(this.myForm.value);
    // let firstname = this.myForm.controls['firstName'].value;
    // let lastName = this.myForm.get['lastName'].value;

    // console.log('firstname is :: ' + firstname);
    // console.log('lastName is :: ' + lastName);
    
    
  }
}
