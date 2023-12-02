import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
  }


  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    username:['',[Validators.required]],
    password:['',[Validators.required], Validators.minLength(6)],
    password2:['',[Validators.required]],
  });

    isValidField( field: string ) {
    //  TODO
    }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
