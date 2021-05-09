import User from './User';

export default class Room {
    users: Array<User>;

    constructor(){
        this.users = [];
    }

    getUsers() : Array<User> {
        return this.users;
    }

    getUserNameById(id: string) : string {
        let username : string = "";
        this.users.forEach( (user, index) => {
            if(user.id.localeCompare(id) == 0){
                username = user.name;
            }
        });

        return username;
    }

    newUserInRoom(name: string, id: string) {
        let newUser : User = new User(name, id);
        this.users.push(newUser);
    } 

    userLeftTheRoom(id: string) : User | null {
        let userWhoLeft : User | null = null;

        this.users.forEach( (user : User, index : number) => {
            if(user.id.localeCompare(id) == 0){
                userWhoLeft = user;
                this.users.splice(index, 1); 
            }
        });

        return userWhoLeft;
    }
}