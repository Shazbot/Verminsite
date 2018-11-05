export interface TokenReward {
  amount: number;
  type: string;
}
export interface Reward {
  tokens?: TokenReward;
  boon?: string;
}
export interface Contract {
  level: string;
  difficulty: string;
  type: string;
  required: number;
  keys: number;
  rewards: Reward;
}
