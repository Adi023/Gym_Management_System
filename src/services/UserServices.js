import httpCommon from "../http-common";

class UserServices{

    addUser(d){
        return httpCommon.post("/user",d);
    }
}const myInstance = new UserServices();
export default myInstance;