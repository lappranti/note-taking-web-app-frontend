import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;
  showPassword: boolean = false;

  hasLowercase!: boolean;
  hasUppercase!: boolean;
  hasNumber!: boolean;
  hasSpecialChar!: boolean;
  hasMinLength!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  register() {
    if (this.formGroup.valid) {
      this.authService.registerUser(this.formGroup.value).subscribe(
        (res) => {
          // console.log('Login successful', res);
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }
}
