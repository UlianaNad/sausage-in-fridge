const elDoor = document.querySelector('select[name="door"]');
const elSausage = document.querySelector('select[name="sausage"]');
const elStatus = document.querySelector('.status > span');

 


const run = () => {
    const valueDoor = elDoor.value;
    const valueSausage = elSausage.value;

    
    if(valueDoor === "open" && valueSausage === "take-out") {
        elStatus.innerHTML = 'You took the sausage.';
        return;
    }
    if(valueDoor === "open" && valueSausage === "put-back") {
        elStatus.innerHTML = 'Close the door please!';
        return;

    }
    if(valueDoor === "close"){
        elStatus.innerHTML = "The door is closed!";
        return;
    }
    if(valueDoor === "open" ) {
        elStatus.innerHTML = 'You opened the door.';
        return;
    }
   
}

run();

elDoor.addEventListener('change', run);
elSausage.addEventListener('change', run);