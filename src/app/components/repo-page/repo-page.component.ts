import { Component,Input, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-repo-page',
  templateUrl: './repo-page.component.html',
  styleUrls: ['./repo-page.component.css']
})
export class RepoPageComponent implements OnInit {
  //@Input() reposeCode:any[];
  respoFile: any[];


  constructor(private respoService: ProfileService) { 
    
  }
 /*  getRepoCode(){
    this.respoService.getResposFile().subscribe(reposData => {
  		console.log(reposData);
      this.respoFile=reposData;
  	})
      
  } */


  ngOnInit(): void {
    
  }

}
