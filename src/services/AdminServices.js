import http from '../http-common'

class adminServices{

    addADmin(d){
        return http.post("/admin",d);
    }

    viewAdmin(){
        return http.get("/admin");
    }  
    
    viewAdminByID(id){
        return http.get("/admin/"+id)
    }

    updateAdmin(d){
        return http.put("/admin/{admin_id}",d)
    }

    deleteAdmin(id){
        return http.delete("/admin/"+id)
    }
}

export default new adminServices();