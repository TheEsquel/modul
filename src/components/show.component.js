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
    template: 
    `
    <div ng-show = 'show.service.cardIsShown' > 
      <h3 >Карта компании</h3>
      <div class= 'inner-show'> 
        ID: <span class = 'value' >{{ show.service.company.id }}  </span> <br/>
        Название: <span class = 'value' > {{ show.service.company.name }}  </span>  <br/>
        ОГРН  :  <span class = 'value' > {{ show.service.company.prn }}    </span>  <br/>
        Тип:  <span class = 'value' > {{ show.service.company.type }}   </span>   <br/>
        Дата регистрации :  <span class = 'value' > {{ show.service.company.date }}    </span>  <br/>
        Активна :  <span  class ='value'ng-if = 'show.service.company.isactive'> Да </span> <br/>
        <button class='btn btn-default' ng-click = 'show.service.editCompany(item)'> Редактировать </button> 
      </div>
    </div>
    `
}