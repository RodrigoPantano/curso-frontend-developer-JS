//se declaran las clases que vamos a utilizar del html.

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container'); // esta variable es para conectar el html que creamos desde JS hacia el mismo html.

//se activa un escuchador de eventos, con el cual decimos que al hacer click se inicialice una función(en este caso 'toggleDesktopMenu'). 

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);

//declaramos la función en la cual usamos un classList.toggle que sirve para saca o pone la clase dependiendo el estado que falte. 
//Y tambien con el classList.contains que devuelve lo contrario de lo que hay para que se cierre cuando abrimos otro y con 
//classList.add agregamos la clase que le sacamos recien para que vuelva a aparecer.

function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isDektopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDektopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}


//Aca se va a hacer la card con todos sus elementos desde JS para emular como si fuera traida de una base de datos. Para copiar todos los datos y hacer parte por parte de la 
//card se usa como modelo la card que ya teniamos creada en el html ya que tenemos que ir haciendo parte por parte dentro del for.
/* 
<div class="product-card">
    <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>  
*/

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Rueda',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Cuadro',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Se utiliza un for of para crear todas las partes de la card utilizando el document.createElement.
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);


        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard); // para terminar aca conectamos el código de html desde js hacia el html.
    }
}

renderProducts(productList);
