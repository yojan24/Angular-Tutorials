import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: any, inputType: 'cel' | 'feh', outputType?: 'cel' | 'feh') {
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let ouputTemp: number;
    if (inputType === 'cel' && outputType === 'feh') {
      ouputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'feh' && outputType === 'cel') {
      ouputTemp = (val - 32) * (5 / 9);
    } else {
      ouputTemp = value;
    }
    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${ouputTemp} ${symbol}`;
  }
}
