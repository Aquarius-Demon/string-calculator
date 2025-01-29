export function add(numbers: string): number {
    if (numbers === '') return 0;
  
    let delimiter: RegExp | string = /[,\n]/;
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterIndex);
      numbers = numbers.substring(delimiterIndex + 1);
    }

    const nums = numbers.split(delimiter).map((num) => {
        const parsedNum = parseInt(num, 10);
        if (isNaN(parsedNum)) {
            throw new Error(`invalid input: ${num}`);
          }
          return parsedNum;      
    });

    const negatives = nums.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}