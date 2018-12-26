import showTemplate from './templates/show.template.html'

class showController{
  constructor(service){
    this.service = service;
    this.isShown = false
}
    $onInit(){
    }
    $onChange(item){
    }
}
 export default  {
    controller: ["service" ,showController],
    controllerAs : 'show',
    template: showTemplate
}