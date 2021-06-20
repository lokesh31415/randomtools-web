import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('page') page: 'home' | 'others' = 'home';

  title = 'RandomTools';
  loginTxt = 'Login';

  navItems: NavItem[] = [
    { label: 'Document', id: 'document' },
    { label: 'Image', id: 'image' },
    { label: 'Audio', id: 'audio' },
    { label: 'Science', id: 'science' },
    { label: 'Other Tools', id: 'other-tools' },
    { label: 'Developers', id: 'developers' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onNavItemClick(item: NavItem) {}

  onLogin() {}
}
