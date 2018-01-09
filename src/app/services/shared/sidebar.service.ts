import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  public menu: any = [{
    titulo: 'principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'dashboard', url: '/dashboard' },
      { titulo: 'ProgressBar', url: '/progress' },
      { titulo: 'dashboard', url: '/graficas1' },
      { titulo: 'Promesas', url: '/promesas' },
      { titulo: 'Rxjs', url: '/rxjs' }
    ]
  }];
  constructor() { }

}
