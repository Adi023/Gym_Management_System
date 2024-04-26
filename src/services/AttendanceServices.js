import httpCommon from '../http-common'

class AttendanceServices{

    addAttendance(d){
        return httpCommon.post("/attendance",d);
    }

    viewAttendanceData(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/attendance/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewAttendaceByAttendanceDate(date){
        return httpCommon.get("/attendance/date/"+date)
    }

    updateAttendance(userId, d){
        return httpCommon.put(`/attendance/${userId}`,d)
    }
}

const myInstance = new AttendanceServices();
export default myInstance;