import httpCommon from "../http-common";

class DietServices{

    addDiet(d){
       return  httpCommon.post("/dietplan",d);
    }

    viewDiet(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/dietplan/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewDietById(dietId){
        return httpCommon.get("/dietplan/"+dietId);
    }

    updateDietDetails(d){
        return httpCommon.put("/dietplan/{dietId}",d);
    }

    deleteDiet(dietId){
        return httpCommon.delete("/dietplan/"+dietId);
    }
}
const myInstance =new DietServices();
export default myInstance;