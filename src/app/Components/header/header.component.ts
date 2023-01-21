import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  onClick(){
    var navbar = document.getElementById('navigation-bar');
    var responsive_class_name = 'responsive';

     navbar?.classList.toggle(responsive_class_name);
  }
}
