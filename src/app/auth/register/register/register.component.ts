import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  homeUrl = '/login';
  constructor(
    private fb: FormBuilder,
    private apiService: ServiceService,
    private router: Router
  ) {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      accessLevel: ['admin'],
    });
  }

  ngOnInit() {}
  submit(data: any) {
    this.apiService
      .submitRegister(data.value)
      .then((res: any) => {
        if (res?.message == 'Successfully Admin Registered') {
          this.router.navigate([this.homeUrl]);
          alert(res?.message)
        }
      })
      .catch((err: HttpErrorResponse) => {
        alert(err.message);
      });
  }
}
