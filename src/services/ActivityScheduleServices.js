import httpCommon from "../http-common";

class ActivityScheduleServices{

    scheduleActivity(d){
       return  httpCommon.post("/activitySchedule",d);
    }

    viewActivitySchedule(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/activitySchedule/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewActivityScheduleById(id){
        return httpCommon.get("/activitySchedule/sheduledActivity/"+id);
    }

    viewScheduleByTrainerId(trainerId){
        return httpCommon.get("/activitySchedule/trainer/"+trainerId);
    }

    viewActivityScheduleByActivityId(activityId){
        return httpCommon.get("/activitySchedule/activity/"+activityId);
    }

    updateActivityScheduleDetails(d){
        return httpCommon.put("/activitySchedule/{id}",d);
    }

}
const myInstance =new ActivityScheduleServices();
export default myInstance;