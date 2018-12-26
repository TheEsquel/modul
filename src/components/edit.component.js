import editTemplate from './templates/edit.template.html'

class editController{
  constructor(service){
    this.service = service;
    this.name  = 'test';
    this.id = '';
}
    $onInit(){
    }
    $onChange(){
    }
}
export default  {
    controller: ["service", editController],
    controllerAs: 'edit',
    template: editTemplate
}