import httpCommon from "../http-common";

class ActivityMapperServices{

    addMapperActivity(d){
       return  httpCommon.post("/activityMapper",d);
    }

    viewActivityMapper(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/activityMapper/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewActivityMapperById(id){
        return httpCommon.get("/activityMapper/byMapId/"+id);
    }

    viewActivityMapperByUserId(pageNumber,pageSize,sortBy,sortDir,userId){
        return httpCommon.get(`/activityMapper/userById/${pageNumber}/${pageSize}/${sortBy}/${sortDir}/${userId}`);
    }

    viewActivityMapperByScheduleId(scheduleId){
        return httpCommon.get("/activityMapper/scheduleActivity/"+scheduleId);
    }

    updateActivityMapperDetails(d){
        return httpCommon.put("/activityMapper/{id}",d);
    }

}
const myInstance =new ActivityMapperServices();
export default myInstance;