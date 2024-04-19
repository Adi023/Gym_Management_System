import httpCommon from "../http-common";

class UserServices{

    addUser(d){
        return httpCommon.post("/user",d);
    }
    viewUsers(){
        return httpCommon.get("/user");
    }

    getUserById(userId){
        return httpCommon.get("/user/"+userId)
    }
}const myInstance = new UserServices();
export default myInstance;