import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../../shared/services/account/account.service";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "app-cabinet",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, SharedModule],
  templateUrl: "./cabinet.component.html",
  styleUrl: "./cabinet.component.scss",
})
export class CabinetComponent {
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  signOut(): void {
    this.router.navigate(["/"]).then(() => {
      localStorage.removeItem("currentUser");
      this.accountService.isUserLogin$.next(true);
    });
  }
}
