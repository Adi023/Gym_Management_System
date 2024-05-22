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

    
    getPaidUsers(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/user/paid/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    
    getUnpaidUsers(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/user/unpaid/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    getUserById(userId){
        return httpCommon.get("/user/"+userId)
    }
}const myInstance = new UserServices();
export default myInstance;