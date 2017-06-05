const personForm = document.querySelector('#personForm');

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target;
    const heading = document.querySelector('h1');
    heading.textContent = f.yourName.value + ' and ' + f.friendName.value;
    console.log(f.yourName.value + ' and ' + f.friendName.value);
}
personForm.addEventListener('submit', handleSubmit);