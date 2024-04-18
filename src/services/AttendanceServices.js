import httpCommon from '../http-common'

class AttendanceServices{

    addAttendance(d){
        return httpCommon.post("/attendance",d);
    }

    viewAttendanceData(){
       return httpCommon.get("/attendance");
    }
}

const myInstance = new AttendanceServices();
export default myInstance;