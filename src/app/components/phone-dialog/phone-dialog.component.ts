import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: "app-phone-dialog",
  standalone: true,
  imports: [
    SharedModule,
    MatIconModule,
    MatTooltip,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./phone-dialog.component.html",
  styleUrl: "./phone-dialog.component.scss",
})
export class PhoneDialogComponent {
  public phoneForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initPhoneForm();
  }
  initPhoneForm(): void {
    this.phoneForm = this.fb.group({
      name: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    })
  }
  
  
  callOrderDialog() {}
}
