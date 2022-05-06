import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-blade-runner',
  templateUrl: './blade-runner.page.html',
  styleUrls: ['./blade-runner.page.scss'],
})
export class BladeRunnerPage implements OnInit {

  movieData:any = [];
  hidden:boolean = true;
  filmRating:string = "";
  constructor(private dataService:DataService, private storage:Storage, private navCtrl:NavController, private vibration:Vibration) { }

  ngOnInit() {
    this.dataService.GetDataBladeRunner().subscribe(
        (data)=>{
          this.movieData = data;
          console.log(this.movieData);
      }
    );
  }

  //Vibrates device
  vibrateDevice():void{
    this.vibration.vibrate(1000);
    console.log(this.vibration);
  }

  //Saves users rating
  onSave():void{
    this.storage.create()
    .then(()=>{
      this.storage.set("statusBladeRunner", this.filmRating);
    })
    .then(()=>{
      console.log(this.filmRating);
      this.navCtrl.navigateBack('/home');
    })
    .catch();
  }

  //Checks if user has selected a rating, if so, display the save button and users choice
  checkForRating():void{
    if (this.filmRating !== "") {
      this.hidden = false;
    }else{
      this.hidden = true;
    }
  }

}
