import axios from 'axios'

export default class editController{
  constructor(service){
    this.service = service;
}
    $onInit(){
    }
    $onChange(item){
      console.log(item)
    }
}
