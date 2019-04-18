import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adresse',
  templateUrl: 'adresse.page.html',
  styleUrls: ['adresse.page.scss']
})
export class AdressePage implements OnInit {
  private cities = [
    'Tripolis', 
    'Benghazi',
    'Misurata',
    'Sabha',
    'Sirt',
    'Tarhouna',
    'Darna'
  ];
  
  public items: Array<{cities: string}> =[];
/*   : Array<{ title: string; note: string }> = [];
 */  constructor() {
/*      for (let i = 1; i < 11; i++) {
 */      { this.items.push({
          cities: ''
  //*         title: 'Item ' + i,
/*       note: 'This is item #' + i
 *//*         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
 */      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
