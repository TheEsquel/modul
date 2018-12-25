import  axios from 'axios'
export default class Service {
    constructor($q){
        this.$q = $q;

    }
    get(){
        return  this.$q.when(axios.get("./company.list.json"))
        .then((response) => {
            console.log(response.data.companies);
            return response.data.companies
        })
    }
}
Service.$inject = ['$q']