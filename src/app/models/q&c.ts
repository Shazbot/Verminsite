import { Contract } from "./contract";
import { Quest } from "./quest";

export interface QandC {
  quests: Quest[];
  contracts: Contract[];
}
