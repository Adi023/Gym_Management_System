import http from '../http-common'

class memberServices{

    addMember(d){
        return http.post("/member",d);
    }

    viewMember(){
        return http.get("/member");
    }

    viewMemberByID(id){
        return http.get("/member/"+id)
    }

    updateMember(d){
        return http.put("/member/{member_id}",d)
    }

    deleteMember(id){
        return http.delete("/member/"+id)
    }
}
const myInstance = new memberServices();
export default myInstance;
