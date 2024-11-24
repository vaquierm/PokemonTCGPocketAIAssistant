import { Type } from "../../Type";
import { PokemonCard } from "../PokemonCard";

export abstract class Move {
    public readonly name: string;
    public readonly requiredEnergy: Type[];
    constructor(name: string, requiredEnergy: Type[]) {
        this.name = name;
        requiredEnergy = requiredEnergy;
    }
    abstract use(/* board */): void;
    canUse(card: PokemonCard): boolean {
        // TODO: Implement energy check
        return true;
    }
}
