import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feture-component1',
  templateUrl: './feture-component1.component.html',
  styleUrls: ['./feture-component1.component.css']
})
export class FetureComponent1Component implements OnInit {

  constructor(private router: Router){               
                                                       
  }  
  ngOnInit() {
  }

}
