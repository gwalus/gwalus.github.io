import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Dollet',
      description: 'Personal budget management application. ( 100commitow - challenge created by DevMentors )',
      image: '/assets/dollet.jpg',
      link: 'https://github.com/gwalus/Dollet',
      technologies: ['MAUI', 'CI/CD', 'EF', 'FreeCurrencyAPI', 'MVVM'],
      type: 'mobile-app'
    },
    {
      name: 'Drinker',
      description: 'Choose your favourite ingredients and make a coctails.',
      image: '/assets/drinker.jpg',
      link: 'https://github.com/gwalus/Drinker',
      technologies: ['WebAPI', 'Angular', 'PostgreSQL', 'CI/CD'],
      type: 'web-app'
    },
    {
      name: 'Quizzy',
      description: 'Check your knowledge from other categories...',
      image: '/assets/quizzy.jpg',
      link: 'https://github.com/gwalus/Quizzy_v2',
      technologies: ['WebAPI', 'Angular', 'PostgreSQL', 'Bootstrap'],
      type: 'web-app'
    },
    {
      name: 'DatingApp',
      description: 'Register and find your new love...',
      image: '/assets/dating_app.jpg',
      link: 'https://gw-dating-app.fly.dev',
      technologies: ['WebAPI', 'Angular', 'PostgreSQL', 'SignalR', 'Fly.io'],
      type: 'web-app'
    },
    {
      name: 'ShoesCollector',
      description: 'Store data about your buying and selling process.',
      image: '/assets/shoes_collector.jpg',
      link: 'https://github.com/gwalus/ShoesCollector',
      technologies: ['WebAPI', 'WPF', 'PostgreSQL', 'Heroku'],
      type: 'web-app'
    },
    {
      name: 'Confab',
      description: 'A modular monolit architecture course created by DevMentors.',
      image: '/assets/confab.jpg',
      link: 'https://github.com/gwalus/Confab',
      technologies: ['WebAPI', 'Clean Architecture', 'PostgreSQL', 'DDD', 'CQRS', 'Unit Tests'],
      type: 'web-app'
    },
    {
      name: 'Drumpad',
      description: 'Choose your music style and play by mixed other samples.',
      image: '/assets/drumpad.jpg',
      link: 'https://github.com/gwalus/Drumpad',
      technologies: ['WPF', 'XAML'],
      type: 'web-app'
    },
    {
      name: 'CeneoSearcher',
      description: 'Find products, subscribe them and check how prices change.',
      image: '/assets/ceneo_searcher.jpg',
      link: 'https://github.com/gwalus/CeneoSearcher',
      technologies: ['WebAPI', 'WPF', 'Sqlite', 'WebScrapping']
      , type: 'web-app'
    },
    {
      name: 'RoadFighter',
      description: 'RoadFighter - the game inspired the game at the same name from pegasus.',
      image: '/assets/road_fighter.jpg',
      link: 'https://github.com/gwalus/RoadFighter',
      technologies: ['Windows Forms / C#'],
      type: 'web-app'
    },
    {
      name: 'QuizApp',
      description: 'Check your knowledge from other categories...',
      image: '/assets/quiz_app.jpg',
      link: 'https://github.com/gwalus/QuizApp_Xamarin',
      technologies: ['Xamarin / C#', 'Mobile App', 'Open Trivia DB'],
      type: 'web-app'
    },
    {
      name: 'CarRegistration',
      description: 'Simple project to store data about vehicles.',
      image: '/assets/car_registration.jpg',
      link: 'https://github.com/gwalus/CarRegistration',
      technologies: ['Blazor', 'CRUD'],
      type: 'web-app'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
