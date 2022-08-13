import { authApis } from "../Apis/Apis";
import AuthApi from "../Apis/UserApi";
import { InterfaceAuthenticationRequest } from "../Apis/types";

class AuthService {
  private api: AuthApi;

  constructor() {
    this.api = authApis;
  }

  async login({ email, password }: InterfaceAuthenticationRequest) {
    return await this.api.login({ email, password });
  }
  
  async signup({ email, password }: InterfaceAuthenticationRequest) {
    return await this.api.signup({ email, password });    
  }

  logout() {
    return this.api.logout();
  }
}

export default new AuthService();
