class TokenService {
    static setToken (data){
        localStorage.setItem('token',data.token)
        localStorage.setItem('user',JSON.stringify(data.user))
        
    }
    static getToken (token){
        return localStorage.getItem('token');
    
   
    }
    static getUser (){
        const user= localStorage.getItem('user');
        return JSON.parse(user);
    }
    static logout (){
        localStorage.removeItem('user')
       
    }
}
export default TokenService;