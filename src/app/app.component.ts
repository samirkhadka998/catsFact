import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';
import { SpinnerService } from './spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catFacts';
  isLoading$ = this.spinnerService.isLoading$;
  constructor(private router : Router, private dataService: DataService, private spinnerService : SpinnerService) {
    
  }

  bore(){
    this.dataService.emitBoreButtonClicked();
  }

  cat(){
    this.dataService.emitCatButtonClicked();
    this.router.navigate(['/cat'])
  }
}
