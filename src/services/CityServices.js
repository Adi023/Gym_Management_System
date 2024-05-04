import httpCommon from '../http-common'

class CityServices{

    addCity(d){
        return httpCommon.post("/city",d);
    }
    viewCity(){
        return httpCommon.get("/city");
    }
}

const myInstance = new CityServices();
export default myInstance;