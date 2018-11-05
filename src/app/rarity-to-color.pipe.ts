import { Pipe, PipeTransform } from "@angular/core";

const colorLookup = {
  1: "white",
  2: "#4caf50", // "green",
  3: "#2196f3", // "blue",
  4: "#ff9800", // "orange",
  5: "#f44336" // "red"
};

@Pipe({ name: "rarityToColor" })
export class RarityToColorPipe implements PipeTransform {
  transform(rarity: string) {
    return colorLookup[rarity];
  }
}
