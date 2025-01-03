import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;
import { CardService } from '../services/card.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName: any
  constructor(
    private cardService: CardService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getUserEmail();
  }
  getUserEmail(): void {
    this.cardService.GetUserCardDetail().subscribe(
      (data: any) => {
        const userEmail = localStorage.getItem('userName');
        this.userName = userEmail;
        console.log(userEmail);
      },
    );
  }
  getUserCardsList() {
    this.router.navigate(['/cardDetail']);
  }
}