import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
 title = 'Fyle';

  username = "";
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  onKey(event: any) {
    this.username = event.target.value;
  }

    

  next(pageName: string) {
    console.log(this.username)
    this.router.navigate([`${pageName}`])
  }
}
