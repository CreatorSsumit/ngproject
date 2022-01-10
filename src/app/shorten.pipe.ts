import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any,count?:number) {
    let data = count ||10;
    
     if(value.length > data)
     {
       return value.substr(0,data) + '...';
     }else{
       return value
     }


  }

}
