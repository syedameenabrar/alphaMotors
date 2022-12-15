import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  homeUrl = '/home';
  constructor(
    private fb: FormBuilder,
    private apiService: ServiceService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.loginForm = this.fb.group({
      type: ['username'],
      username: [''],
      password: [''],
    });
  }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
  submit(data: any) {
    this.apiService
      .submitLogin(data.value)
      .then((res: any) => {
        if (res?.message == 'Successfully Admin Login') {
          this.router.navigate([this.homeUrl]);
        } else {
          alert(res?.message);
        }
      })
      .catch((err: HttpErrorResponse) => {
        alert(err.message);
      });
  }
}
