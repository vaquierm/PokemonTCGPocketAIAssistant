import { Card } from "./Card";
import { Type } from "../Type";
import { Move } from "./moves/Move";

export abstract class PokemonCard extends Card {
    public readonly get isBasic {
        return this.preEvolution === undefined
    }
    public readonly preEvolution: string | undefined;
    private readonly energy: Type[] = [];
    public readonly moves: Move[];
    constructor(name: string, moves: Move[]) {
        super(name, CardType.Pokemon);
        this.moves = moves;
    }

}
