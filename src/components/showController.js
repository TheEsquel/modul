import axios from 'axios'

export default class showController{
  constructor(id){
    this.id = "id";

}
    $onInit(){
      console.log(this.id);
      
    }
    $onChange(){
      
    }
}
showController.$inject = ['id']