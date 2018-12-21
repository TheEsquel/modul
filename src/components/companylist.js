import axios from 'axios'
export default class CompanyListController  {
     constructor(){
        this.listJSON = "listJSON";
        this.list = "list"
    }
    getList(){
        axios.get("./company.list.json")
        .then((response) => {                   
            this.listJSON = response.data;
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    return  this.list;
    } 
}