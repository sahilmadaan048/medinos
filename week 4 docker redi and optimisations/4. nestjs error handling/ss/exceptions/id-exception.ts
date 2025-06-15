export class IdException extends Error {
    constructor(message?: string) {
        super(message || "Invalid id");
    }
}
 
// to make the custom exception avaiable to everyone
// we have to make a custom exception filter potherwise the nestjs server will throw a internal server error exception

