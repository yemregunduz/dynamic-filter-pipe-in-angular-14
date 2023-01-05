import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/example.model';

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.scss']
})
export class FilterExampleComponent implements OnInit {

  constructor() { }
  filterText:string = ""
  projects : ProjectModel[] = [{
    id : 1,
    title: "Awesome Project",
    description: "Description 1",
    status: "Waiting for approval",
    owner:{
      firstName:"Yunus Emre",
      lastName : "Gündüz",
      email : "yegunduz@outlook.com"
    }
  },{
    id : 2,
    title: "Something",
    description: "Açıklama 2",
    status: "Approved",
    owner:{
      firstName:"Fatma Nur",
      lastName : "Karaman",
      email : "fatmanur.karaman@outlook.com"
    }
  },{
    id : 3,
    title: "Excellent Project",
    description: "Description ",
    status: "Waiting for approval",
    owner:{
      firstName:"Ali Veli",
      lastName : "Atıcı",
      email : "aliveliatici@gmail.com"
    }
  },{
    id : 4,
    title: "John Doe's Project",
    description: "Project description... ",
    status: "Approved",
    owner:{
      firstName:"John",
      lastName : "Doe",
      email : "johndoe@gmail.com"
    }
  },{
    id : 5,
    title: "Proven S ",
    description: "Wonderful!",
    status: "Rejected",
    owner:{
      firstName:"Jack",
      lastName : "London",
      email : "jacklondon@gmail.com"
    }
  },{
    id : 6,
    title: "Weekly B",
    description: "weakly weakly..",
    status: "Waiting for approval",
    owner:{
      firstName:"Albert",
      lastName : "Einstein",
      email : "a.enstein@gmail.com"
    }
  },{
    id : 7,
    title: "Rival Deha",
    description: "A chess project ",
    status: "Rejected",
    owner:{
      firstName:"Magnus",
      lastName : "Carslen",
      email : "magnuscarslen@gmail.com"
    }
  },{
    id : 8,
    title: "Futbol Project",
    description: "Description ",
    status: "Rejected",
    owner:{
      firstName:"Anastasios",
      lastName : "Bakasetas",
      email : "bakasetas@gmail.com"
    }
  },{
    id : 9,
    title: "Angel F",
    description: "A dream",
    status: "Waiting for approval",
    owner:{
      firstName:"Cüneyt",
      lastName : "Çakır",
      email : "cuneycakir@outlook.com"
    }
  },{
    id : 10,
    title: "Referee",
    description: "Mistakes",
    status: "Approved",
    owner:{
      firstName:"Ahmet",
      lastName : "Çakar",
      email : "ahmetcakar@yandex.com"
    }
  },{
    id : 11,
    title: "A software project",
    description: "Description",
    status: "Waiting for approval",
    owner:{
      firstName:"Bill",
      lastName : "Kanton",
      email : "kant_01@gmail.com"
    }
  },{
    id : 12,
    title: "Test Project",
    description: "Test description",
    status: "Rejected",
    owner:{
      firstName:"Nezahat",
      lastName : "Karaman",
      email : "nezo74@gmail.com"
    }
  },{
    id : 13,
    title: "Blacksea Project",
    description: "Description ",
    status: "Approved",
    owner:{
      firstName:"İlyas",
      lastName : "Gündüz",
      email : "kasrangoluilyas@gmail.com"
    }
  } ]
  ngOnInit(): void {
  }

}
