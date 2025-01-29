export function add(numbers: string): number {
    if (numbers === '') return 0;
  
    let delimiter: RegExp | string = /[,\n]/;
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterIndex);
      numbers = numbers.substring(delimiterIndex + 1);
    }
  
    return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num, 10), 0);
  }