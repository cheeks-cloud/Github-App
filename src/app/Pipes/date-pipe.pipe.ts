import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any):number{
    let today:Date = new Date();//todauys date
    let todayWithnotime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var difference= Math.abs(value - todayWithnotime)
    const secInaDay = 86400
    var differenceinsec = difference * 0.001
    var dateCounter = differenceinsec/secInaDay


    if(dateCounter >= 1 && value > todayWithnotime){
      return dateCounter;
    }else{
      return 0;
    }
    
  }

}
