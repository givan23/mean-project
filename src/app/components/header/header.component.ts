import {Component, Input} from '@angular/core';


interface ILink {
  id: number;
  name: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input() links: ILink[] | null = [
    {
      id: 1,
      name: 'Demo',
      path: '/demo'
    },
    {
      id: 2,
      name: 'Login',
      path: '/auth/login'
    },
    {
      id: 3,
      name: 'Registration',
      path: '/auth/registration'
    },{
      id: 4,
      name: 'Core',
      path: '/core'
    }

  ];

  selected = 1;

  onSelection = (page: number) => {
    this.selected = page;
  }
}
