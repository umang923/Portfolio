import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  projects = [
  {
    title: 'SkyBus – Online Ticket Booking',
    description: 'Web-based bus ticket booking and management system with role-based access for users, conductors, and admins. Built using ASP.NET (C#) with SQL Server.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'ASP.NET WebForm', 'SQL Server'],
    github: 'https://github.com/umang923/skybus-project',
    imgUrl: 'assets/skybus.png'
  },

  {
    title: 'LPG Booking System',
    description: 'Web-based LPG booking platform for customers, distributors, and admins with features like booking management, order tracking, and complaint handling.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'Laravel', 'MySQL'],
    github: '#',
    imgUrl: ''
  },

  {
    title: 'Online Medicine Store',
    description: 'E-commerce platform for ordering medicines online with product listing, shopping cart, order placement, and admin management.',
    techStack: ['Python', 'Django', 'MySQL'],
    github: 'https://github.com/PritPatel1908/medicinemasters',
    imgUrl: ''
  }
];

  skillCategories = [
    { name: 'Frontend', skills: [{ name: 'Angular' }, { name: 'HTML' }, { name: 'CSS' }, { name: 'Bootstrap' }, { name: 'JavaScript' }] },
    { name: 'Backend & Languages', skills: [{ name: '.NET' }, { name: 'C#' }, { name: 'SQL' }, { name: 'Python' }, { name: 'Java' }] },
    { name: 'AI / ML', skills: [{ name: 'AI' }, { name: 'Machine Learning' }, { name: 'Data Analysis' }] }
  ];
  ngAfterViewInit() {

    new Typed('#typing', {
      strings: [
        "Software Developer",
        "SQL Enthusiast",
        ".NET Intern"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

  }

}