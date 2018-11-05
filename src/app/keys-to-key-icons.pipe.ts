import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "keysToKeyIcons"
})
export class KeysToKeyIconsPipe implements PipeTransform {
  transform(numKeys: number): any {
    let skulls = "";
    for (let i = 0; i < numKeys; i++) {
      skulls += "🔑";
    }
    return skulls;
  }
}
