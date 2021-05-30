import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  public course=["Angular", "js","React","jquery","css","bootstrap"];

  userModel= new User('MAILA DASU','dasumaila@gmail.com','kalii','male','');
  constructor() { }

  ngOnInit(): void {
  }

}
