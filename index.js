const personForm = document.querySelector('#personForm');

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target;
    const heading = document.querySelector('h1');
    const yourName = f.yourName.value;
    const friendName = f.friendName.value;
    if(yourName !== "" && friendName !== ""){
        heading.textContent = yourName + ' and ' + friendName;
        console.log(yourName + ' and ' + friendName);
    }
    else if(yourName !== "" && friendName === ""){
        heading.textContent = yourName;
        console.log(yourName);
    }
    else if(yourName === "" && friendName !== ""){
        heading.textContent = friendName;
        console.log(friendName);
    }
    else{
        heading.textContent = "Put in some names!";
        console.log('No Names Entered');
    }
}
personForm.addEventListener('submit', handleSubmit);