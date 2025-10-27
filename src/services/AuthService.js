import TokenService from "./TokenService"
class AuthService {
    
    static isLoggedIn(){
        return TokenService.getToken();

    }
}

export default AuthService;