import listTemplate from './templates/list.template.html'

class listController  {
     constructor(service){
        this.list = "list's original value";
        this.service = service;
    }
    $onInit(){      
        this.service.getList()
            .then(data => {
                this.list = data
                console.log(data);
            })
    }
    $onChange(){
        console.log('on change');        
            }
        }
        
export default {
    controller: ["service", listController],
    controllerAs: 'listComponent',
    template:  listTemplate
}
