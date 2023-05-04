import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catFacts';
  /**
   *
   */
  constructor(private router : Router, private dataService: DataService) {
    
  }

  bore(){
    this.dataService.emitBoreButtonClicked();
  }

  cat(){
    this.dataService.emitCatButtonClicked();
    this.router.navigate(['/cat'])
  }
}
