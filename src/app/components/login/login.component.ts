import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hidePassword: boolean;
  loanding: boolean = false;
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.hidePassword = true;
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.form);
    const user = this.form.value.user;
    const password = this.form.value.password;

    if (user == 'arobles' && password == 'arobles') {
      this.Loanding();
    } else {
      this.ShowError();
      this.form.reset();
    }
  }
  ShowError()
  {
    this._snackBar.open('Usuario o Clave son invalidos..', '',
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
    })
  }
  Loanding() {
     this.loanding = true;
    setTimeout(()=> {
      this.loanding = false;
            this.router.navigate(['dashboard'])

    }, 1500);
  }

}
