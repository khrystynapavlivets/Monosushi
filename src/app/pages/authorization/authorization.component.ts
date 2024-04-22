import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../shared/services/account/account.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROLE } from '../../shared/constants/role.constant';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  public authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initAuthForm();
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  login(): void {
    this.accountService.login(this.authForm.value).subscribe(data => {
      if (data && data.length > 0) {
        const user = data[0];
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.accountService.isUserLogin$.next(true);
        if (user && user.role === ROLE.USER) {
          this.router.navigate(['/cabinet']);
        } else if (user && user.role === ROLE.ADMIN) {
          this.router.navigate(['/admin']);
        }
      }
    }, (e) => {
      console.log(e);
    })
  }
}
