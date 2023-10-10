import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidenav',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent {
  closeResult: string | undefined;
  constructor(private offcanvasService: NgbOffcanvas,private router: Router) {}
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  isHovered: boolean = false;

public logOut(){
  sessionStorage.clear();
  this.router.navigate(['/home']);
}

}
