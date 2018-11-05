export interface Trait {
  name: string;
  description: string;
}

export enum SlotType {
  MELEE = "melee",
  RANGED = "ranged",
  TRINKET = "trinket",
  HAT = "hat"
}

export interface Quest {
  traits: Trait[];
  can_wield: string;
  rarity: number;
  reward: string;
  slot_type: SlotType;
  item_type: string;
  keys: number;
}
