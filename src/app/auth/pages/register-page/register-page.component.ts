import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validatos.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  ngOnInit() {
  }


  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorsServiice.emailPattern) ],[this.emailVaidator]],

  // email:['',[Validators.required, Validators.pattern(this.validatorsServiice.emailPattern) ],[new EmailValidator()]],
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

  constructor( private fb: FormBuilder,
    private validatorsServiice: ValidatorsService,
    private emailVaidator: EmailValidator
    ) {}
}
