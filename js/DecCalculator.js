import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
  constructor(settings) {
      super(settings);
      console.log( this.getName() );
  }
  changeNumber(root) {
      let activeElement = root.find('.active');
      activeElement.attr('contentEditable','true');

  }
  initEvents(){
    this.$calculatorDOMElement.find(".display-number").on('click', (event) => {
        const parentLabel = $(event.target).parent(".display-number");
        this.changeNumber(parentLabel);
    })
    this.$calculatorDOMElement.find('.operator-bar ').on('click',(event)=>{
        // console.log($calculatorDOMElement);
        this.checkNumber();
        this.updateResult();
    })
  }
  add(numberX, numberY) {
      let result = [0,0,0,0,0,0,0,0,0];
      for(let i = numberX.length - 1; i >= 0  ; i--) {
          let carryBit =  numberX[i] + numberY[i] + result[i];
          // console.log(carryBit);
          if( carryBit  >= 10) {
            var carryBitString=carryBit.toString();
            result[i] = parseInt(carryBitString[0],10);
            result[i-1] = 1;
          } else {
            result[i] = carryBit;
          }
      }
      return result;
  }

  updateResult(){
      let root =  this.$calculatorDOMElement;
      let $resultNumber = root.children(".group-number").children(".result-bit");

      var spans=document.querySelectorAll(`.dec-calculator .result-bit .active`);
      console.log(this.resultNumberArray);
      for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
         let valueResult = this.resultNumberArray[i];
         $resultNumber.eq(j).children(":first-child").text(this.resultNumberArray[i]);
      }
  }
}
export { DecCalculator  };
