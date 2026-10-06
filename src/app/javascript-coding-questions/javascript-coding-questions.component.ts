import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-coding-questions',
  standalone: true,
  imports: [],
  templateUrl: './javascript-coding-questions.component.html',
  styleUrl: './javascript-coding-questions.component.scss'
})
export class JavascriptCodingQuestionsComponent implements OnInit{

  ngOnInit(): void {
    const sumOfTwoNumbers = this.calculate(5, 2);
    console.log('sumOfTwoNumbers', sumOfTwoNumbers)

    this.maxNumberInArray([1, 2, 3, 4, 5]);

    console.log(this.secondLargestElementInArray([54, 44, 22, 70, 21]))

    const q1Element= document.getElementById('q1');
    if (q1Element) {
      q1Element.innerHTML = `
    <div>
      calculate(a: number, b: number) { <br>
        return a + b;<br>
      }<br>
    </div>`
    }

    const q2Element= document.getElementById('q2');
    if (q2Element) {
      q2Element.innerHTML = `
    <div>
      maxNumberInArray(array: number[]) { <br>
        return Math.max(...array); <br>
      } <br>
    </div>`
    }

    const q3Element= document.getElementById('q3');
    if (q3Element) {
      q3Element.innerHTML = `
    <div>
      isPalindrome(originalString: string): boolean { <br>
        const reversedString = originalString.split('').reverse().join(''); <br>
        return originalString===reversedString ? true : false; <br>
      } <br>
    </div>`
    }

    const q4Element= document.getElementById('q4');
    if (q4Element) {
      q4Element.innerHTML = `
    <div>
      filterEvenNumbers(array: number[]): number[] { <br>
        const filteredArray = array.filter((arr:number) => { <br>
          return arr % 2 === 0; <br>
        }) <br>
        return filteredArray; <br>
      } <br>
    </div>`
    }

    const q5Element= document.getElementById('q5');
    if (q5Element) {
      q5Element.innerHTML = `
    <div>
      removeDuplicatesFromArray(array: any[]) { <br>
        return array.filter((item, index) => array.indexOf(item)===index); <br>
      } <br>
    </div>`
    }

    const q6Element= document.getElementById('q6');
    if (q6Element) {
      q6Element.innerHTML = `
    <div>
      secondLargestElementInArray(array: any[]): void {  <br>
        const sortedArray = array.sort((a, b) => a - b) ; <br>
        return sortedArray[1]; <br>
      } <br>
    </div>`
    }
  }

  calculate(num1: number, num2: number) {
    return num1+num2;
  }

  maxNumberInArray(array: number[]) {
    return Math.max(...array);
  }

  isPalindrome(originalString: string): boolean {
    const reversedString = originalString.split('').reverse().join('');
    return originalString===reversedString ? true : false;
  }

  filterEvenNumbers(array: number[]): number[] {
    const filteredArray = array.filter((arr:number) => {
      return arr % 2 === 0;
    })
    return filteredArray;
  }

  removeDuplicatesFromArray(array: any[]) {
    return array.filter((item, index) => array.indexOf(item)===index);
    // return Array.from(new Set(array));
  }

  secondLargestElementInArray(array: any[]): void { 
    // implements sorting in ascending order
    const sortedArray = array.sort((a, b) => a - b) ;
    return sortedArray[1];
    // to implemt sorting in descending order
    // array.sort((a, b) => b - a) ;
  }

}
