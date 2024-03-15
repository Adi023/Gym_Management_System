import httpCommon from "../http-common";

class UserServices{

    addUser(d){
        return httpCommon.post("/user",d);
    }
    viewUsers(){
        return httpCommon.get("/user");
    }
}const myInstance = new UserServices();
export default myInstance;