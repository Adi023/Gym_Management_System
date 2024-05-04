import httpCommon from '../http-common';

class PlanServices{

    addPlan(d){
        return httpCommon.post("/plan",d);
    }
    viewPlan(){
        return httpCommon.get("/plan");
    }

    viewAllPlan(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/plan/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    getPlanById(planId){
        return httpCommon.get("/plan/"+planId)
    }

    deletePlan(planId){
        return httpCommon.delete("/plan/"+planId)
    }
}

const myInstance = new PlanServices();
export default myInstance;