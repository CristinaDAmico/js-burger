/****************************
    CREATE YOUR BURGER
****************************/

// Referenze
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');

// Settings 
var coupons = ['12345ABC', '67891DEF', '02567GHI'];


// Calcolo del prezzo
btn.addEventListener('click',  
    function(){
        var name = burgerName.value.trim();

        // nome del burger obbligatorio
        if (name.lenght === 0) {
            //errore
            alert('Non hai inserito il nome del tuo burger');
        } else {
            // 1- aggiunta costo ingredienti al prezzo base
            var price = 50;
        }

        for (var i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i];
            // console.log(ingredientCheck.checked);

            if (ingredientCheck.checked === true) {
                console.log(ingredientCheck.value);
                // aggiungere il prezzo
                price += parseInt(ingredientCheck.value);

            }
        }
        console.log(price);

        // 3-coupon 
        var couponCode = coupon.value;
        if(coupons.includes(couponCode)) {
            // 20% di sconto
            price -= price * 0.2;
        }

        // 2- stampa il prezzo
        displayPrice.innerHTML = price.toFixed(2);
    }
);