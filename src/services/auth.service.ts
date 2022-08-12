import Apis from '../Apis/Apis';
import { InterfaceAuthenticationRequest } from '../Apis/types';



class AuthService{
  api: Apis;
    
  constructor(){
    this.api = new Apis();
  }

  async login({email, password}:InterfaceAuthenticationRequest){
      const {message, token, result} = await this.api.login({email, password});
      if(result){
        this.api.setToken(token)
        localStorage.setItem('token', token)
      }
      return { result, message, token}
  }

  logout(){
    this.api.removeToken();
  }
  
  async signup({email, password}:InterfaceAuthenticationRequest){
    const {message, token, result} = await this.api.signup({email, password});
    if(result){
      this.api.setToken(token)
      localStorage.setItem('token', token)
    }
    return { result, message, token};
  }
  
}

export default new AuthService();