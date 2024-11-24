export abstract class Card {
    public readonly name: string;
    public readonly cardType: CardType;
    public readonly description: string | undefined;

    constructor(name: string, cardType: CardType, description?: string) {
        this.name = name;
        this.cardType = cardType;
        this.description = description;
    }
}