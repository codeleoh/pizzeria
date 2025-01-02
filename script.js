const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    const pizzaPrice = item.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `${pizzaPrice}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        c('.pizzaWindowArea').style.display = 'flex';
    });
    
    c('.pizza-area').append(pizzaItem);
})