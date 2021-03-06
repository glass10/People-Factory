const personForm = document.querySelector('#personForm');

//var jsonResponse;
var nameVar;
var movieVar;

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target;
    const heading = document.querySelector('h1');
    const label = document.querySelector('font');
    const yourName = f.yourName.value;
    const movieName = f.movieName.value;
    nameVar = yourName;
    movieVar = movieName;
    if(yourName !== "" && movieName !== ""){ //Both e 
        heading.textContent = movieName + ' for ' + yourName;
        movie(movieName);
        label.textContent = yourName.toUpperCase();
        console.log(movieName + ' for ' + yourName);
    }
    else if(yourName !== "" && movieName === ""){ //Just Name
        heading.textContent = yourName;
        //label.textContent = yourName.toUpperCase();
        // const boldedName = document.createElement('strong');
        // boldedName.textContent = yourName;
        // details.appendChild(boldedName);


        console.log(yourName);
    }
    else if(yourName === "" && movieName !== ""){ //Just Movie
        heading.textContent = movieName;
        movie(movieName);
        label.textContent = movieName.toUpperCase();
        console.log(movieName);
    }
    else{ //Neither
        heading.textContent = "A Factory of People";
        label.textContent = "Error: Put in some info!";
        console.log('No info Entered');
    }
}

function movie(name){
    var result = name.toLowerCase();
    var index = 0;
    for(var i = 0; i<result.length; i++)
    {
        index++;
        if(result[i]===" ")
        {
            result = result.replaceAt(index, "-", name);
        }
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             //console.log(response);
             var poster = (JSON.parse(this.responseText)).results[0].poster_path;
             poster = 'https://image.tmdb.org/t/p/w185/'+poster;
             console.log(poster);
             const image = document.querySelector('img');
             image.src = poster;
             console.log('https://impalette.com/api/scan?apikey=4cd6b68d-e01e-4118-8005-749dc7ab22cd&link='+poster);
             color('https://impalette.com/api/scan?apikey=4cd6b68d-e01e-4118-8005-749dc7ab22cd&lumLow=20&link='+poster);
        }
    };
    xhttp.open("GET",
    'https://api.themoviedb.org/3/search/movie?api_key=fc88acbc5397f84449dc18dc298f859c&query='+result, true);
    xhttp.send();
}

function color(url){
    const label = document.querySelector('font');
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             //console.log(response);
             const color = (JSON.parse(this.responseText))[0].primary.hex;
             console.log(color);
             label.style.color = color;

            renderList(color);

                //details.appendChild(renderList(list));
                //   details.innerHTML = `
                //     <ul>
                //         <li>Name: ${nameVar}</li>
                //         <li>Movie Title: ${movieVar}</li>
                //         <li>Color: ${colorDiv}</li>
                //     </ul>
                //     `
             //return color;
        }
    };
    xhttp2.open("GET",url, true);
    xhttp2.send();
}

function renderList(color){
    const colorDiv = `
                <div style="background-color: ${color}; width: 100px; height: 50px;"></div>
             `
    const list = document.createElement('ul');
    const listName = document.createElement('li');
    listName.textContent = "Name: " + nameVar;
    const listMovie = document.createElement('li');
    listMovie.textContent = "Movie Title: " + movieVar;
    const listColor = document.createElement('li');
    listColor.innerHTML = `Color: ${colorDiv}`;

    list.appendChild(listName);
    list.appendChild(listMovie);
    list.appendChild(listColor);
    details.innerHTML = "";
    details.appendChild(list);
}
String.prototype.replaceAt  = function(index, character, string)
{
	return this.substr(0, index-1) + character + this.substr(index, string.length);
}

personForm.addEventListener('submit', handleSubmit);