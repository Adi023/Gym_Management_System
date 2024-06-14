import httpCommon from "../http-common";

class EquipmentsServices{

    addEquipments(d){
       return  httpCommon.post("/equipment",d);
    }

    viewEquipments(pageNumber,pageSize,sortBy,sortDir){
        return httpCommon.get(`/equipment/${pageNumber}/${pageSize}/${sortBy}/${sortDir}`);
    }

    viewEquipmentById(equipmentId){
        return httpCommon.get("/equipment/"+equipmentId);
    }

    updateEquipmentDetails(d){
        return httpCommon.put("/equipment/{equipmentId}",d);
    }

    deleteEquipment(equipmentId){
        return httpCommon.delete("/equipment/"+equipmentId);
    }
}
const myInstance =new EquipmentsServices();
export default myInstance;