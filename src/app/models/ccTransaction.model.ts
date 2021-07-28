  
export class CCTransaction
{
    private amount: number = 1;
    private softDescriptor: string ="";
    private cardHolderInfo : CardHolderInfo = new CardHolderInfo("Jane","Doe","11111")
    private currency: string = "USD"
    private cardTransactionType: string ="AUTH_CAPTURE";
    private pfToken: string =""
    constructor(amount: number,softDescriptor: string,cardHolderInfo: any ,currency:string , cardTransactionType :string , pfToken : string){

    }
}

export class CardHolderInfo{
    constructor(firstname: string, lastname : string, zip : string){}
}
