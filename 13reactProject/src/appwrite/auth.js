import conf from '../conf/conf'
import {Client, Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    Account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.account)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another method
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    } 

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this. account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite servicr :: logout :: error", error);
        }
    }


}

const AuthService = new AuthService();

export default AuthService
