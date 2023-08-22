const addition = (...n) => 
{
    let sum = 0
    for (let i = 0; i < n.length; i++) 
    {
        
        sum = sum + n[i]
    }
    console.log(sum);
}

const subtraction = (...n) => 
{
    let sub = 0
    for (let i = 0; i < n.length; i++) 
    {
        
        sub = sub - n[i]
    }
    console.log(sub);
}

const multiplication = (...n) => 
{
    let mul = n[0]
    for (let i = 1; i < n.length; i++) 
    {
        
        mul = mul *  n[i]
    }
    console.log(mul);
}

const division = (...n) => 
{
    let div = 1
    for (let i = 1; i < n.length; i++) 
    {
        
        div = div / n[i]
    }
    console.log(div);
}

const ceil = (...n) => 
{
    let div = 1
    for (let i = 1; i < n.length; i++) 
    {
        
        div = div / n[i]
    }
    console.log(Math.ceil(div));
}

const floor = (...n) => 
{
    let div = 1
    for (let i = 1; i < n.length; i++) 
    {
        
        div = div / n[i]
    }
    console.log(Math.floor(div));
}

const factorial = (...numbers) => 
{
    const results = [];
  
    for (const num of numbers) 
    {
      if (num === 0 || num === 1) 
      {
        results.push(1);
      } 
      else 
      {
        let result = 1;
        for (let i = 2; i <= num; i++) 
        {
          result *= i;
        }
        results.push(result);
      }
    }
  
    return results;
  }

  const performOperation = (operation, ...numbers) => 
  {
    switch (operation) 
    {
      case 'addition':
        addition(...numbers);
        break;
      case 'subtraction':
        subtraction(...numbers);
        break;
      case 'multiplication':
        multiplication(...numbers);
        break;
      case 'division':
        division(...numbers);
        break;
      case 'ceil':
        ceil(...numbers);
        break;
      case 'floor':
        floor(...numbers);
        break;
      case 'factorial':
        const results = factorial(...numbers);
        console.log(results);
        break;
      default:
        console.log('Error: Please select valid operation');
    }
  }
  
  performOperation('addition', 1, 2, 3, 4, 5);
  performOperation('subtraction', 1, 2, 3, 4, 5);
  performOperation('multiplication', 1, 2, 3, 4, 5);
  performOperation('division', 1, 2, 3, 4, 5);
  performOperation('ceil', 1, 2, 3, 4, 5);
  performOperation('floor', 1, 2, 3, 4, 5);
  performOperation('factorial', 1, 2, 3, 4, 5);
  
const factoryFunction = (operation) => 
  {
    switch (operation) 
    {
      case 'addition':
        return addition;
      case 'subtraction':
        return subtraction;
      case 'multiplication':
        return multiplication;
      case 'division':
        return division;
      case 'ceil':
        return ceil;
      case 'floor':
        return floor;
      case 'factorial':
        return factorial;
      default:
        console.log('Error: Please select valid operation');
    }
  };
  
  const Operation = 'addition';
  const operationFunction = factoryFunction(Operation);
  
  console.log(operationFunction);

  
//addition(1,2,3,4,5)
//subtraction(1,2,3,4,5)
//multiplication(1,2,3,4,5)
//division(1,2,3,4,5)
//ceil(1,2,3,4,5)
//floor(1,2,3,4,5)
//const results = factorial(1,2,3,4,5)
//console.log(results);




