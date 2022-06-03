const elDoor = document.querySelector('select[name="door"]');
const elSausage = document.querySelector('select[name="sausage"]');
const elStatus = document.querySelector('.status > span');

 


const run = () => {
    const valueDoor = elDoor.value;
    const valueSausage = elSausage.value;


    if(valueDoor == 'open') {
    elStatus.innerHTML = "The door is opened. You can take the sausage.";
    return;

    } else  if((valueDoor === 'open') && (valueSausage === 'take-out')) {
        elStatus.innerHTML = "Take the sausage. Enjoy your meal!";
        return;
    }

    if((valueDoor == 'close') && (valueSausage == 'take-out') || (valueSausage == 'take-out') || (valueDoor == 'close')) {
        elStatus.innerHTML = "The door is closed!";
        return;
    }

    if((valueDoor == 'open') && (valueSausage === 'put-back')) {
        elStatus.innerHTML = "You have put the sausage in the fridge. Close the door!";
        return;
    }
    if(valueSausage === 'put-back') {
        elStatus.innerHTML = "It is not possible! You did not take anything!";
        return;
    }
    if ((valueDoor === 'choose1') || (valueSausage === 'choose2')) {
        elStatus.innerHTML = "Choose option!";
        return;
    }
   
}

run();

elDoor.addEventListener('change', run);
elSausage.addEventListener('change', run);