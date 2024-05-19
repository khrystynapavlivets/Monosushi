import { Component, Inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@angular/fire/auth";
import { doc, docData, Firestore, setDoc } from "@angular/fire/firestore";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AccountService } from "../../shared/services/account/account.service";
import { ROLE } from "../../shared/constants/role.constant";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm?: string;
  phoneNumber: number;
}

@Component({
  selector: "app-auth-dialog",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatIconModule,
  ],
  templateUrl: "./auth-dialog.component.html",
  styleUrl: "./auth-dialog.component.scss",
})
export class AuthDialogComponent implements OnInit {
  public authForm!: FormGroup;
  public registerForm!: FormGroup;
  public isLogin = true;
  public hide = true;
  private registerData!: IRegister;
  public checkPassword = false;

  constructor(
    private auth: Auth,
    private afs: Firestore,
    private router: Router,
    private accountService: AccountService,
    private toaster: ToastrService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuthDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.initAuthForm();
    this.initRegisterForm();
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
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
        ],
      ],
      password: [null, [Validators.required]],
      confirmedPassword: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    });
  }

  loginUser(): void {
    const { email, password } = this.authForm.value;
    this.login(email, password)
      .then(() => {
        this.toaster.success("User successfully login");
        this.dialogRef.close();
      })
      .catch((e) => {
        this.toaster.error(e.message);
      });
  }

  registerUser(): void {
    const { email, password } = this.registerForm.value;
    this.registerData = this.registerForm.value;
    this.emailSignUp(email, password)
      .then(() => {
        this.toaster.success("User successfully created");
        this.isLogin = !this.isLogin;
        this.registerForm.reset();
      })
      .catch((e) => {
        this.toaster.error(e.message);
      });
  }

  async login(email: string, password: string): Promise<void> {
    const credential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password,
    );
    docData(doc(this.afs, "users", credential.user.uid)).subscribe(
      (user) => {
        const currentUser = { ...user, uid: credential.user.uid };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        if (user && user["role"] === ROLE.USER) {
          this.router.navigate(["/cabinet"]);
        } else if (user && user["role"] === ROLE.ADMIN) {
          this.router.navigate(["/admin"]);
        }
        this.accountService.isUserLogin$.next(true);
      },
      (e) => {
        console.log("error", e);
      },
    );
  }

  async emailSignUp(email: string, password: string): Promise<any> {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password,
    );
    const user = {
      email: credential.user.email,
      firstName: this.registerData.firstName,
      lastName: this.registerData.lastName,
      phoneNumber: "",
      address: "",
      orders: [],
      role: "USER",
    };
    setDoc(doc(this.afs, "users", credential.user.uid), user);
  }

  changeIsLogin(): void {
    this.isLogin = !this.isLogin;
  }

  get password(): AbstractControl {
    return this.registerForm.controls["password"];
  }

  get confirmed(): AbstractControl {
    return this.registerForm.controls["confirmedPassword"];
  }

  checkConfirmedPassword(): void {
    this.checkPassword = this.password.value === this.confirmed.value;
    if (this.password.value !== this.confirmed.value) {
      this.registerForm.controls["confirmedPassword"].setErrors({
        matchError: "Password confirmation doesnt match",
      });
    }
  }

  checkVisibilityError(control: string, name: string): boolean | null {
    return this.registerForm.controls[control].errors?.[name];
  }
}
