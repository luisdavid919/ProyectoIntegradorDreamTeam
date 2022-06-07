/*const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById("usuario").value,
        name: document.getElementById("nombre").value,
        lastnameM: document.getElementById("apellidopat").value
    
    
    }
    movies.push(movie);
    document.forms[0].reset();
    
    console.warn('added', {movies});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
    
    
    document.addEventListener('DOMContentLoaded'), ()=>{
    
        document.getElementById("botonenviar").addEventListener('click', addMovie)
    };
    console.log(movie);

    
    }*/
    /*fetch('https://fakestoreapi.com/products/10')
    .then(datos=>{
        return datos.json();

    })
    .then(info=>{
        console.log("El nombre del producto es:" , info.title, "su precio es:", info.price)

    })*/
    /*fetch('https://fakestoreapi.com/products/',{
        method:"POST",
        body:JSON.stringify(
            {
                title: 'test product',
                price: '109',
                descrption: 'lorem ipsum set',
                category: 'electronic'



            }



        )
    })
    .then(res=>res.json())
    .then(json=>console.log(json) )*/
    document.addEventListener("DOMContentLoaded", function(e) {

        var miForm = document.getElementById("formulario");
        miForm.onsubmit = function(e) {
          e.preventDefault();
          var formData = new FormData(this);
          var jsonData = {};
          for (var [k, v] of formData) {
            jsonData[k] = v;
          }
          console.log(jsonData);
        }
        miForm:JSON.stringify({

        })
      });
      //Esta es la buena mediante un formData