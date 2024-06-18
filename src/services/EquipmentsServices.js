import httpCommon from "../http-common";

class EquipementsServices{

    addEquipements(d){
       return  httpCommon.post("/equipment",d);
    }

    viewEquipements(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/equipment/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewEquipementById(eqpId){
        return httpCommon.get("/equipment/"+eqpId);
    }

    updateEquipementDetails(d){
        return httpCommon.put("/equipment/{eqpId}",d);
    }

    deleteEquipement(eqpId){
        return httpCommon.delete("/equipment/"+eqpId);
    }
}
const myInstance =new EquipementsServices();
export default myInstance;