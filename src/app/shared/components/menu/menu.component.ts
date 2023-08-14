import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})

export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {
              label: 'Pipes of Angular',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Text and dates',
                  icon: 'pi pi-align-left',
                  routerLink: '/',
                },
                {
                  label: 'Numbers',
                  icon: 'pi pi-dollar',
                  routerLink: 'numbers',
                },
                {
                  label: 'No commons',
                  icon: 'pi pi-globe',
                  routerLink: 'uncommon',
                },
              ]
            },
            {
              label: 'Others',
              icon: 'pi pi-cog',
              items: [
                {
                  label: 'Custom Pipes',
                  icon: 'pi pi-cog',
                  routerLink: 'custom'
                }
              ]
            }
        ];
    }

}
