import httpCommon from "../http-common";

class UserServices{

    addUser(d){
        return httpCommon.post("/user",d);
    }
    viewUsers(){
        return httpCommon.get("/user");
    }

    viewAllUsers(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/user/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);

    }

    getUserById(userId){
        return httpCommon.get("/user/"+userId)
    }
}const myInstance = new UserServices();
export default myInstance;