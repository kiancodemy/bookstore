import { jwtDecode } from "jwt-decode";
type JwtPayload={
   name:string,
   lastName:string,
   email:string
}
const jwtDecoder=(token:string)=>{
   return jwtDecode<JwtPayload>(token);
}
export default jwtDecoder;