import { Card } from "./Card";

export abstract class ItemCard extends Card {
    constructor(cardName: string) {
        super(cardName, CardType.Item);
    }
    abstract applyEffect(): void;
}
