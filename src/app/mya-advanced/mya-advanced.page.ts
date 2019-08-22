import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mya-advanced',
  templateUrl: './mya-advanced.page.html',
  styleUrls: ['./mya-advanced.page.scss'],
})
export class MyaAdvancedPage implements OnInit {

  front = false;
  snd;
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  constructor(private getData: DataService) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      console.log(data);
      this.characters = data;
      this.a = this.characters.slice(86, 90);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }
  flip() {
    this.front = !this.front;
  }
  playSound(){
    this.front = null;
    this.snd = new Audio(`../../assets/${this.list[0]['romanji']}.mp3`)    
    this.snd.play()
  }

  next(){
      this.counter++;
      this.list = [this.a[this.counter]];
  }
  back(){
      this.counter--;
      this.list = [this.a[this.counter]];
  }



}
