import { Component, OnInit } from '@angular/core';
import { post } from '../post';
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit{
  
  preferiti: post[] = [];

  constructor(private pref:PostsService){ }

 ngOnInit(): void {
    this.preferiti = this.pref.getPreferiti();
  }

  elimina(p:post){
    this.pref.eliminaPreferiti(p);
  }

  svuota(){
    this.pref.svuotaPreferiti();
    this.preferiti = this.pref.getPreferiti();
  }
}
