import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    if (this.authStatus === true) {
      this.router.navigate(['affichercompte']);
    }
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {console.log("Connexion réussie !");
      this.router.navigate(['affichercompte']);
      this.authStatus = this.authService.isAuth;}
    ); 
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    console.log("Deconnexion");
  }


}
