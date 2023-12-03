import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
  }


  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(customValidators.emailPattern) ]],
    username:['',[Validators.required, customValidators.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  });

    isValidField( field: string ) {
    //  TODO
    }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
