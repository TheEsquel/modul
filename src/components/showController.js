import axios from 'axios'

export default class showController{
  constructor(service){

    this.service = service;
    this.isShown = false
}
    $onInit(){
      
    }
    $onChange(item){
      console.log(item)
    }
}
showController.$inject = ['id']