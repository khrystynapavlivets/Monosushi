import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AccountService } from '../../shared/services/account/account.service';
import { ROLE } from '../../shared/constants/role.constant';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatIconModule],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss'
})
export class AuthDialogComponent {
  public authForm!: FormGroup;
  public registerForm!: FormGroup;
  public isLogin = true;
  public hide = true;
  public checkError = false;

  constructor(
    private auth: Auth,
    private afs: Firestore,
    private router: Router,
    private accountService: AccountService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuthDialogComponent>
  ) { }

  ngOnInit(): void {
    this.initAuthForm();
    this.initRegisterForm();
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      // firstName: [null, [Validators.required]],
      // lastName: [null, [Validators.required]],
      // phoneNumber: [null, [Validators.required]],
      // passwordRepeat: [null, [Validators.required]],
    })
  }


  initRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i),
        ],],
      password: [null, [Validators.required], Validators.minLength(6)],
      passwordRepeat: [null, [Validators.required], Validators.minLength(6)],
      phoneNumber: [null, [Validators.required], Validators.pattern(/^\+\d{1,3}\s?\d{3,14}$/)],
    })
  }


  loginUser(): void {
    const { email, password } = this.authForm.value;
    this.login(email, password).then(() => {
      this.toastr.success('User successfully login');
    }).catch(e => {
      this.toastr.error(e.message);
    })
  }

  // loginUser(): void {
  //   const { email, password } = this.authForm.value;
  //   this.login(email, password)
  //     .then(() => {
  //       this.toastr.info('Вітаю у вашому кабінеті');
  //       this.dialogRef.close();
  //     })
  //     .catch((e) => {
  //       this.toastr.error('Помилка логінування!', e.message);
  //     });
  // }

  // registerUser(): void {
  //   const { email, password } = this.registerForm.value;
  //   this.registerData = this.registerForm.value;
  //   if (this.registerForm.get('password')!.value !== this.registerForm.get('passwordRepeat')!.value) {
  //     this.registerForm.get('passwordRepeat')!.setErrors({ passwordMismatch: true });
  //     console.log("Passwords do not match");
  //     return;
  //   }

  //   if (this.registerForm.valid) {
  //     this.emailSignUp(email, password).then(() => {
  //       this.isLogin = !this.isLogin;
  //       this.registerForm.reset();
  //     }).catch(e => {
  //       console.log(e);
  //     });
  //   }
  // }

  async login(email: string, password: string): Promise<void> {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    docData(doc(this.afs, 'users', credential.user.uid)).subscribe(user => {
      const currentUser = { ...user, uid: credential.user.uid };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      if (user && user['role'] === ROLE.USER) {
        this.router.navigate(['/cabinet']);
      } else if (user && user['role'] === ROLE.ADMIN) {
        this.router.navigate(['/admin']);
      }
      this.accountService.isUserLogin$.next(true);
    }, (e) => {
      console.log('error', e);
    })
  }

  registerUser(): void {
    const { email, password, firstN, lastN, phone} =
      this.registerForm.value;
    this.emailSignUp(email, password, firstN, lastN, phone)
      .then(() => {
        this.toastr.info('Вітаю ви зареєстровані!');
        this.isLogin = !this.isLogin;
        this.registerForm.reset();
        this.dialogRef.close();
      })
      .catch((e) => {
        this.toastr.error('Помилка реєстрації!', e.message);
      });

  }


  async emailSignUp(
    email: string,
    password: string,
    firstN: string,
    lastN: string,
    phone: string): Promise<any> {

    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = {
      email: credential.user.email,
      firstName: firstN,
      lastName: lastN,
      phoneNumber: phone,
      address: '',
      orders: [],
      role: 'USER'
    };
    setDoc(doc(this.afs, 'users', credential.user.uid), user);
  }

  changeIsLogin(): void {
    this.isLogin = !this.isLogin;
  }
}