import httpCommon from "../http-common";

class ActivityServices{

    addActivity(d){
       return  httpCommon.post("/Activity",d);
    }

    viewActivity(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/Activity/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewActivityById(activityId){
        return httpCommon.get("/Activity/"+activityId);
    }

    updateActivityDetails(d){
        return httpCommon.put("/Activity/{activityId}",d);
    }

    deleteActivity(activityId){
        return httpCommon.delete("/Activity/"+activityId);
    }
}
const myInstance =new ActivityServices();
export default myInstance;