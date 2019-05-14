let orderCount = 0;

const takeOrder = (topping1, topping2) => {
 console.log(`Pizza with ${topping1} and ${topping2}`);
 orderCount++;
}
takeOrder("pineapple", "Mushrooms");


let pinNumber = 1234
let amount = 100
let accNum = 355599

const dispenseCash = (amount , pinNumber , accNum) => {
    if (pinNumber == 1234 && accNum == 355599)
    {console.log(`withdraw ${amount} from the account ${accNum}`);
}