import axios from "axios";

const API_URL = "http://localhost:3500/";

class LoginService {
    
    login(){
        return axios.get(API_URL + "public/login");
    }
}

export default new LoginService();