import httpCommon from '../http-common'

class MembershipServices{

    addMembership(d){
        return httpCommon.post("/membership",d);
    }
    viewMembership(){
        return httpCommon.get("/membership");
    }

    viewAllMembership(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/membership/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);

    }

    getMembershipById(membershipId){
        return httpCommon.get("/membership/"+membershipId)
    }
}

const myInstance = new MembershipServices();
export default myInstance;