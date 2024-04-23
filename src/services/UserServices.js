import httpCommon from "../http-common";

class UserServices{

    addUser(d){
        return httpCommon.post("/user",d);
    }
    viewUsers(){
        return httpCommon.get("/user");
    }

    viewAllUsers(pageNumber,pageSize){
        return httpCommon.get(`/user/pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    getUserById(userId){
        return httpCommon.get("/user/"+userId)
    }
}const myInstance = new UserServices();
export default myInstance;