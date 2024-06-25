import httpCommon from "../http-common";

class UserServices{

    addUser(d){
        return httpCommon.post("/user",d);
    }
    getAllUsersInfo(){
        return httpCommon.get("/user/allUsersInfo");
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

    
    updateUser(d){
        return httpCommon.put("/user/{userId}",d)
    }
}const myInstance = new UserServices();
export default myInstance;