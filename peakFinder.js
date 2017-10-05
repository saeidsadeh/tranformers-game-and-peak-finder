const numbers = [4,1,3,6,6,6,2,1,7,2,2,2,4,5,8,8,8,3,2]
// const numbers = [9,5,3,3,3,7,9]
// const numbers = [1,2,7,7,6,3]
// const numbers = [5,2,7,8]
// const numbers = [1,3,5,2]

var before,after;
var duplicatePeakArr =[];
var duplicateVallyArr =[];
for (var i=0; i<=numbers.length-1; i++){
    //Finding the number before
    if (i-1 >= 0) {
        before = numbers[i - 1];
    }else{
        before = 0;
    }

    //Finding the number after
    if (i+1 <= numbers.length) {
        after = numbers[i + 1];
    } else {
        break;
    }

    // console.log("before:"+ before +"  current:"+ numbers[i] +"  after:"+ after);

    if(numbers[i] > before && numbers[i] > after){
        console.log("peak found "+ numbers[i]);
    }else if(numbers[i] > before && numbers[i] == after){
        duplicatePeakArr.push(after);
        for(var j=i+2; j<numbers.length-1; j++){
            if(numbers[i] < numbers[j]){
                break;
            }else if(numbers[i] == numbers[j]){
                duplicatePeakArr.push(numbers[j]);

            }else if(numbers[i] > numbers[j]){
                console.log("peak found "+numbers[i]);
                for (var l=0 ; l<=duplicatePeakArr.length-1;l++){
                    console.log("duplicate peak found "+duplicatePeakArr[l]);
                }
                duplicatePeakArr =[];
                i=j;
                before = numbers[i - 1];
                if (i+1 <= numbers.length) {
                    after = numbers[i + 1];
                }
                break;
            }
        }
    }

    if(numbers[i] < before && numbers[i] < after){
        console.log("vally found "+numbers[i]);
    }else if(numbers[i] < before && numbers[i] == after){
        duplicateVallyArr.push(after);
        for(var j=i+2; j<numbers.length-1; j++){
            if(numbers[i] > numbers[j]){
                break;
            }else if(numbers[i] == numbers[j]){
                duplicateVallyArr.push(numbers[j]);

            }else if(numbers[i] < numbers[j]){
                console.log("vally found "+numbers[i]);
                for (var l=0 ; l<=duplicateVallyArr.length-1;l++){
                    console.log("duplicate vally found "+duplicateVallyArr[l]);
                }
                duplicateVallyArr=[];
                i=j;
                break;
            }
        }
    }
}
