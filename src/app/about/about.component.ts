import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'เกี่ยวกับเรา';
  age: number;
  info = { email:'KS2Mo@gmail.com' };
  logo = './assets/images/watermelon.jpg';
  imgWidth = 200;
  users = ['Mo','Neung'];
  isShow = false;
  myColor = 'yellow';
  isActive = false;
  courses = [
    {name : 'php' ,price: 200},
    {name : 'nodejs' ,price: 200},
    {name : 'react' ,price: 200}
  ]
  constructor(private titleBar: Title)
  {
    this.age = 10;
  }

  ngOnInit(){
    this.titleBar.setTitle('เกี่ยวกับเรา');
    this.title = 'Kassarin Saraporn';
  }
  go(){
    this.isActive = true;
    this.imgWidth = 100;
    this.myColor = 'blue';
  }

}
