import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username:string;
  reposCode : any[];
  reposName: string;

  constructor(private profileService: ProfileService) {
    
   }
   
   findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe(profileData => {
  		console.log(profileData);
  		this.profile = profileData;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
    }) 
    this.profileService.updateRespo(this.reposName);
    this.profileService.getResposFile().subscribe(reposData => {
  		console.log(reposData);
  		//this.reposCode = reposData;
  	})  	
  }

  ngOnInit(): void {
  }

}
