import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value){
      return 'defaultProfile.jpg';
    }
    return value;
  }

}
