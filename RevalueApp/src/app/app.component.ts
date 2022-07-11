import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REVALUEAPP';

  // // someHTML ='Some HTML <script> alert("hello"); </script>'
  // injectedhtml = 'this is <scrip> not a safe </script>'

  myURL = 'javascript:alert("hello")';

  constructor(private router: Router) { }

  onAbout() {
    this.router.navigate(['About-us'])
  }

}


  

