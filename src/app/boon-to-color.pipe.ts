import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "boonToColor"
})
export class BoonToColorPipe implements PipeTransform {
  transform(boon_name: string): any {
    let color = "white";
    switch (boon_name) {
      case "Increased Defense":
        color = "#4caf50";
        break;
      case "Increased Damage":
        color = "#f44336";
        break;
      case "Increased Stamina":
        color = "#03a9f4";
        break;
      case "Increased Stagger":
        color = "#ff9800";
        break;
      default:
        break;
    }
    return color;
  }
}
