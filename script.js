// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  function addToCart(productName, productPrice, productImage) {
    
    const cartItems = localStorage.getItem('cartItems');
    
    if (cartItems) {
      
      const parsedCartItems = JSON.parse(cartItems);
      parsedCartItems.push({ name: productName, price: productPrice, image: productImage });
      localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
    } else {
      // If no cart items exist, create a new array with the product
      const newCartItems = [{ name: productName, price: productPrice, image: productImage }];
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
    
    
    alert('Product added to cart!');
  
    
    window.location.href = 'cart7.html';
  }
  
  document.querySelector('a[href="myDiv1"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link/button
    document.querySelector('#myDiv1').scrollIntoView({ behavior: 'smooth' }); // Scroll to the target div
  });
  document.querySelector('a[href="myDiv2"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link/button
    document.querySelector('#myDiv2').scrollIntoView({ behavior: 'smooth' }); // Scroll to the target div
  });
  document.querySelector('a[href="myDiv3"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link/button
    document.querySelector('#myDiv3').scrollIntoView({ behavior: 'smooth' }); // Scroll to the target div
  });


