import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validatos.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private validatorsServiice: ValidatorsService
    ) {}

  ngOnInit() {
  }


  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern( this.validatorsServiice.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorsServiice.emailPattern) ]],
    username:['',[Validators.required, this.validatorsServiice.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  });

    isValidField( field: string ) {
      return this.validatorsServiice.isValidField( this.myForm, field );
    }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
