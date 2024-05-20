import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../../../shared/services/account/account.service";
import { ToastrService } from "ngx-toastr";
import { SharedModule } from "../../../shared/shared.module";
import { Firestore } from "@angular/fire/firestore";
import { Auth } from "@angular/fire/auth";


@Component({
  selector: "app-user-data",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./user-data.component.html",
  styleUrl: "./user-data.component.scss",
})
export class UserDataComponent implements OnInit {
  public userForm!: FormGroup;
  public isAddress = false;
  public user!: any;

  constructor(
    public fb: FormBuilder,
    private accountService: AccountService,
    private afs: Firestore,
    private toaster: ToastrService,
    private auth: Auth,
  ) {}

  ngOnInit(): void {
    this.initUserForm();
    this.userData();
    this.updateUser();
  }

  initUserForm(): void {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      phoneNumber: [null, [Validators.required, Validators.minLength(8)]],
      address: [null, [Validators.required]],
    });
  }
  userData(): void {

      if (typeof localStorage !== 'undefined' && localStorage.length > 0 && localStorage.getItem("currentUser")) {
        this.user = JSON.parse(localStorage.getItem("currentUser") as string);

        this.userForm.patchValue({
          email: this.user.email,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          phoneNumber: this.user.phoneNumber,
          address: this.user.address,
        });
      }

  }


  updateUser(): void {
    this.accountService.userData$.subscribe(() => {
      this.userData();
    });
  }

  updateUserData(): void {
    const { email, firstName, lastName, phoneNumber, address } = this.userForm.value;
    const user = {
      address: address,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      role: "USER",
    };
    this.accountService
      .updateUserFirebase(user, this.user.uid)
      .then(() => {
        console.log("User update successful");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
    this.accountService.isUserLogin$.next(true);
    this.accountService.userData$.next(true);
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.toaster.info("Дані користувача оновлено");
  }
}
