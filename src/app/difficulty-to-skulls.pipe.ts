import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "difficultyToSkulls"
})
export class DifficultyToSkullsPipe implements PipeTransform {
  private difficulty_lookup = {
    Easy: 1,
    Normal: 2,
    Hard: 3,
    Nightmare: 4,
    Cataclysm: 5
  };
  transform(difficulty_name: string): any {
    let skulls = "";
    for (let i = 0; i < this.difficulty_lookup[difficulty_name]; i++) {
      skulls += '<div class="d-inline-block m-1">&#9760;</div>';
    }
    return skulls;
  }
}
