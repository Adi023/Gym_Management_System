import httpCommon from '../http-common'

class AttendanceServices{

    addAttendance(d){
        return httpCommon.post("/attendance",d);
    }

    viewAttendanceData(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/attendance/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewAttendanceByUserId(pageNumber,pageSize,sortBy,sortDir,userId){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/attendance/byid/${pageNumber}/${pageSize}/${sortBy}/${sortDir}/${userId}`);
    }

    viewAttendaceByAttendanceDate(date,pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/attendance/date/${date}/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`)
    }

    updateAttendance(userId, d){
        return httpCommon.put(`/attendance/${userId}`,d)
    }

    weeklyAttendanceCount(){
        return httpCommon.get(`/attendance/sevenDaysCount`)
    }
}

const myInstance = new AttendanceServices();
export default myInstance;