import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/services/account/account.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',

})
export class AdminComponent implements OnInit {
  constructor(
    private router: Router,
    public accountService: AccountService
  ) { }

  ngOnInit(): void {
  }


  logOut(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
    this.accountService.isUserLogin$.next(true);
  }

}
