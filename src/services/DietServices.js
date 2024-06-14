import httpCommon from "../http-common";

class DietServices{

    addDiet(d){
       return  httpCommon.post("/Diet",d);
    }

    viewDiet(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/Diet/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewDietById(dietId){
        return httpCommon.get("/Diet/"+dietId);
    }

    updateDietDetails(d){
        return httpCommon.put("/Diet/{dietId}",d);
    }

    deleteDiet(dietId){
        return httpCommon.delete("/Diet/"+dietId);
    }
}
const myInstance =new DietServices();
export default myInstance;