import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    selectedSkill : string = 'angular'

  onSkillChange(skill : string){
    this.selectedSkill = skill
  }
}
