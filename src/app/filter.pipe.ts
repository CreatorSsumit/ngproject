import { newArray } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtervalue:string,propsvalue:string){

    if(value.length === 0 && filtervalue === ''){
      return value;
    }
 
 let newArray = [];

    for (const item of value) {
      
      if(item[propsvalue] === filtervalue){
        newArray.push(item)
      }

    }

    return newArray;
    


  }

}
