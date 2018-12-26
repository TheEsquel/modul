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
    template: 
    `
    <div>
      <h3> Список компаний: </h3>
      <div ng-repeat='item in listComponent.list track by $index'>
        <a href="#" ng-click = 'listComponent.service.showCompany(item)'> {{ item.name }} id: {{ item.id }} </a>
      </div>
    </div>
    `
}
