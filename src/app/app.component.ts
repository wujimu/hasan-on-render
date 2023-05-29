import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  public appPages = [
    { title: 'About Me', url: '/folder/experience', icon: 'accessibility' },
    { title: 'Blog', url: '/folder/blog', icon: 'book' },
    { title: 'Travel', url: '/folder/travel', icon: 'airplane' },
    { title: 'Gallery', url: '/album', icon:'images'},
    {title: 'HackWhisperer', url:'https://twitter.com/HackWhisperer', icon:'logo-twitter'},
    {title: 'My Linkedin', url:'https://www.linkedin.com/in/hasan-s-18748458/', icon:'logo-linkedin'}
    // { title: 'Login', url: '/login', icon: 'key'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {}
}
