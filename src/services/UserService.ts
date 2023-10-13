import { IUser } from "../models/IUser";

export class UserService {
    private static users:IUser[] = [
        {sno:1,name:'Aseem',age:25},
        {sno:2,name:'Aseem2',age:25},
        {sno:3,name:'Aseem3',age:25},
    ]
    public static getAllUsers() {
        return this.users
    }
}