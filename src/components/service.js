import  axios from 'axios'
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
        this.newCompany = {}
        console.log(this.company);      
    }
    editCompany(item){
        this.editIsShown = true

    }
    saveCompany(){     
        this.company.name = this.newCompany.name
        this.company.prn = this.newCompany.prn
        this.company.type  = this.newCompany.type
        this.company.date  = this.newCompany.date
        console.log(this.newCompany.date);   
    }
}
Service.$inject = ['$q']