
const decode = (token:string) => {
  const [header, payload, signature] = token.split('.');
  
  try{ 
    return JSON.parse(window.atob(payload));
  }catch(e){
    return window.atob(payload);
  }
}

export const getAuth = (token: string) => {
  return decode(token);
}

export default { getAuth }
