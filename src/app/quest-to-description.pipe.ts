import { Pipe, PipeTransform } from "@angular/core";

import { Quest, SlotType } from "./models/quest";

@Pipe({
  name: "questToDescription"
})
export class QuestToDescriptionPipe implements PipeTransform {
  transform(quest: Quest): string {
    let description = "";
    switch (quest.slot_type) {
      case SlotType.MELEE:
      case SlotType.RANGED:
        description = "<span>SHIT</span>";
        break;

      default:
        break;
    }
    return description;
  }
}
