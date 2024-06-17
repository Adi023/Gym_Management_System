import httpCommon from "../http-common";

class ActivityServices{

    addActivity(d){
       return  httpCommon.post("/activity",d);
    }

    viewActivity(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/activity/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewActivityById(activityId){
        return httpCommon.get("/activity/"+activityId);
    }

    updateActivityDetails(d){
        return httpCommon.put("/activity/{activityId}",d);
    }

    deleteActivity(activityId){
        return httpCommon.delete("/activity/"+activityId);
    }
}
const myInstance =new ActivityServices();
export default myInstance;