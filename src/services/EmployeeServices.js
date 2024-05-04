import httpCommon from '../http-common'

class EmployeeServices{

    addEmployee(d){
        return httpCommon.post("/employee",d);
    }
    viewEmployees(){
        return httpCommon.get("/employee");
    }

    viewAllEmployee(pageNumber,pageSize,sortBy,sortDir){
        // console.log(`Sort By: ${sortBy}, Sort Dir: ${sortDir}`);
        return httpCommon.get(`/employee/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);

    }

    getEmployeeById(empId){
        return httpCommon.get("/employee/"+empId)
    }
}

const myInstance = new EmployeeServices();
export default myInstance;