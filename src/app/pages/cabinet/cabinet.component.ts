import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../shared/services/account/account.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cabinet',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.scss'
})
export class CabinetComponent implements OnInit {

  
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.router.navigate(['/']).then(() => {
      localStorage.removeItem('currentUser');
      this.accountService.isUserLogin$.next(true);
    });
  }
}
