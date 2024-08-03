// Obtener los elementos necesarios del DOM
const productos = document.querySelectorAll('.producto');
const listaProductos = document.querySelector('.lista-productos');
const total = document.querySelector('.total');
const aa = document.getElementById('a')
const modooscuro = document.getElementById('modooscuro')
const contenido = document.getElementById('contenido')
const header = document.getElementById('cabeza')
const footer = document.getElementById('pies')
const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")

// Inicializar el total en 0
let totalPrecio = 0;

// Recorrer cada producto y agregar un evento al botón "Agregar"
for (let i = 0; i < productos.length; i++) {
    const botonAgregar = productos[i].querySelector('.agregar');
    botonAgregar.addEventListener('click', () => {
      // Obtener la información del producto
      const nombreProducto = productos[i].querySelector('h5').textContent;
      const precioProducto = parseFloat(productos[i].querySelector('p').textContent.replace('$', '',));
    
      // Agregar el producto a la lista del carrito
      const nuevoProducto = document.createElement('li');
      const btnEliminar = document.createElement('button')
      btnEliminar.textContent = "X"
      btnEliminar.classList.add("btnEliminar")
      nuevoProducto.classList.add("nuevoProducto")
      nuevoProducto.innerHTML = `${nombreProducto} - $${precioProducto}`;
      nuevoProducto.appendChild(btnEliminar)
      listaProductos.appendChild(nuevoProducto);
    
      // Actualizar el total
    
      totalPrecio += precioProducto;
      total.textContent = totalPrecio.toFixed(2);
    
      // Boton de eliminar
    
      btnEliminar.addEventListener("click", ()=>{
        listaProductos.removeChild(nuevoProducto)
        totalPrecio = totalPrecio - precioProducto;
        total.textContent = totalPrecio.toFixed(2);
      })
    });
    }
verificacion = aa.getAttribute("data-bs-theme")

modooscuro.addEventListener("click", () =>{
    if (aa.getAttribute("data-bs-theme") === "light"){
        aa.setAttribute("data-bs-theme", "dark")
        console.log(aa.getAttribute("data-bs-theme"))
        contenido.classList.add("bodyDark")
        header.classList.add("headerDark")
        footer.classList.add("headerDark")
        card1.classList.add("card1")
        card2.classList.add("card2")
        card3.classList.add("card3")
    } else{
        aa.setAttribute("data-bs-theme", "light")
        console.log(aa.getAttribute("data-bs-theme"))
        contenido.classList.remove("bodyDark")
        header.classList.remove("headerDark")
        footer.classList.remove("headerDark")
        card1.classList.remove("card1")
        card2.classList.remove("card2")
        card3.classList.remove("card3")
    }
})


