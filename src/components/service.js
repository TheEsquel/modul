import  axios from 'axios'
import { error } from 'util';
export default class Service {
    constructor($q){
        this.$q = $q;
        this.company = {}
        this.newCompany = {}
        this.cardIsShown = false
        this.editIsShown = false
    }
    getList(){
        return  this.$q.when(axios.get("./company.list.json"))
        .then((response) => {
            console.log(response.data.companies);
            this.axiosData = response.data.companies
            return this.axiosData
        })
    }
    showCompany(item){
        console.log(item.name);
        this.cardIsShown = true
        this.company = item
        console.log(this.company);      
    }
    editCompany(item){
        this.editIsShown = true

    }
    saveCompany(){
        console.log(this.company.id);        
        this.company.name = this.newCompany.name
        console.log(this.newCompany.name)
        axios.post("./company.list.json", {
            'companies/[this.company.id]/name' : this.newCompany.name
        })
            .then(response => {
                console.log(response);               
            })
            .catch(error => {
                console.log(error);
                
            })

    }
}
Service.$inject = ['$q']