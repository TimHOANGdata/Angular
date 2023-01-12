import { Component } from '@angular/core';

@Component({ //annotation transforme class en web components.
  selector: 'app-root', //permet de utiliser le app root pour creer des instances
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public  title: string;

  constructor(){
    this.title = 'crm';
  }
}
