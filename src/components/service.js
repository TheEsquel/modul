import  axios from 'axios'
export default class Service {
    constructor($q){
        this.$q = $q;
        this.company = {}
        this.cardIsShown = true
        this.editIsShown = true
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
        console.log('edit company is  ' + this.editIsShown);
        this.editIsShown = true
        console.log('edit company is  ' + this.editIsShown);
    }
}
Service.$inject = ['$q']