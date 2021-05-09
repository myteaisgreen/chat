export default class Message {
    from: string;
    message: string;

    constructor(from: string, message: string){
        this.from = from;
        this.message = message;
    }
}