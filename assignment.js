//feet to mile converter
function feetToMile(feet){
    if(feet <0){
        alert("Please enter a positive value");
    }
    else{
        const result = feet * 0.000189393939;
        return result;
    }    
}

const mile = feetToMile(100)
console.log(mile, "mile(s).")

//wood calculator
function woodCalculator(chair, table, bed){
    const totalWood = (chair * 1) + (table * 3) + (bed * 5);
    return totalWood;
}

const totalWood = woodCalculator(10, 10, 12)
console.log("Total wood:", totalWood, "cubic inchs.")

//brick calculator
function brickCalculator(buildingSize){
    if(buildingSize < 0){
        alert("Please enter a positive value");
    }
    else{
        if(buildingSize <= 20 && buildingSize > 10){
            const secondSection = buildingSize - 10;
            const brickquantity = (secondSection * 12 * 1000) + (10 * 15 * 1000);
            return brickquantity;
        }
        else if(buildingSize >20){
            const thirdSection = buildingSize - 20;
            const secondSection = buildingSize - (thirdSection + 10);
            const brickquantity = (thirdSection * 10 * 1000) + (secondSection * 12 * 1000) + (10 * 15 * 1000);
            return brickquantity;
        }
        else{
            const brickquantity = (buildingSize * 15) * 1000;
            return brickquantity;
        }
    }
}

const totalBrickQuantity = brickCalculator(50);
console.log("Total bricks:", totalBrickQuantity, "pcs.");

//search shortest word in an array of strings
function tinyFriend(str) {
    const shortest = str.reduce((shortestWord, currentWord) => {
        return shortestWord.length < currentWord.length ? shortestWord : currentWord;
    }); return shortest;
}
const shortestWord = tinyFriend(["The", "quick", "brown", "an", "i", "fox", "jumped", "over", "the", "lazy", "dog"]);
console.log(shortestWord);
//sir, ei last part ta amar bujhte khub problem hocchilo, tai assignment ta joma dite late hoye gelo. but ekhon ami at least array.reduce er ei function ta bujhte perechi in-shaAllah. ki korlam na bujhe joma dite chaini.