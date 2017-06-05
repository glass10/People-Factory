const personForm = document.querySelector('#personForm');

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target;
    const heading = document.querySelector('h1');
    const label = document.querySelector('h2');
    const yourName = f.yourName.value;
    const movieName = f.movieName.value;
    if(yourName !== "" && movieName !== ""){ //Both 
        heading.textContent = movieName + ' for ' + yourName;
        label.textContent = yourName.toUpperCase();
        console.log(movieName + ' for ' + yourName);
    }
    else if(yourName !== "" && movieName === ""){ //Just Name
        heading.textContent = yourName;
        label.textContent = yourName.toUpperCase();
        console.log(yourName);
    }
    else if(yourName === "" && movieName !== ""){ //Just Movie
        heading.textContent = movieName;
        label.textContent = movieName.toUpperCase();
        console.log(movieName);
    }
    else{ //Neither
        heading.textContent = "A Factory of People";
        label.textContent = "Error: Put in some info!";
        console.log('No info Entered');
    }
}
personForm.addEventListener('submit', handleSubmit);