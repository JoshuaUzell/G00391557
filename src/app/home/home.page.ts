import { Component, OnInit } from '@angular/core';
import { Color } from '@ionic/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  name:string = "";
  storedName:string = "";
  isDisabled:boolean = true;
  hidden:boolean = true;
  filmRatingGOG:string = "";
  filmRatingbtFuture:string = "";
  filmRatingLordOfRings:string = "";
  filmRatingBladeRunner:string = "";

  constructor(private storage:Storage) {}

  ngOnInit(): void {
  
  }

//Loads info
ionViewDidEnter(){
  //Loads status of Guardians of the galaxy Vol 2
  this.storage.create()
  .then(()=>{
    this.storage.get('statusGOG')
    .then((status)=>{
      this.filmRatingGOG = status;
    })
    .catch();
  })
  .catch();

    //Loads status of Back To the Future
    this.storage.create()
    .then(()=>{
      this.storage.get('statusbtFuture')
      .then((status)=>{
        this.filmRatingbtFuture = status;
      })
      .catch();
    })
    .catch();

     //Loads status of Lord of the rings
     this.storage.create()
     .then(()=>{
       this.storage.get('statusLordOfRings')
       .then((status)=>{
         this.filmRatingLordOfRings = status;
       })
       .catch();
     })
     .catch();

      //Loads status of Blade Runner
      this.storage.create()
      .then(()=>{
        this.storage.get('statusBladeRunner')
        .then((status)=>{
          this.filmRatingBladeRunner = status;
        })
        .catch();
      })
      .catch();
}

  //Unhides text for page on pressing confirm button
  onConfirm():void{
    // alert("You pressed confirm"); Used for testing
    this.hidden = false;
    this.storedName = this.name;
  }

  //Check if user entered valid name
  checkName():void{
    if (this.name !== "") {
      this.isDisabled = false;
   
    }else{
      this.isDisabled = true;
  
    }
  }
}
