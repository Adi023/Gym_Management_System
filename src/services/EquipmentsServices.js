import httpCommon from "../http-common";

class EquipementsServices{

    addEquipements(d){
       return  httpCommon.post("/equipement",d);
    }

    viewEquipements(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/equipement/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewEquipementById(eqpId){
        return httpCommon.get("/equipement/"+eqpId);
    }

    updateEquipementDetails(d){
        return httpCommon.put("/equipement/{eqpId}",d);
    }

    deleteEquipement(eqpId){
        return httpCommon.delete("/equipement/"+eqpId);
    }
}
const myInstance =new EquipementsServices();
export default myInstance;