import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
