function calculateTotalPrice() {
  let total = 0;
  $('.table tbody tr').each(function() {
    let price = parseFloat($(this).find('.productPrice').text().replace('$', ''));
    let quantity = parseInt($(this).find('.quantity input').val());
    let subtotal = price * quantity;
    total += subtotal;
    $(this).find('.subTotal').text('$' + subtotal.toFixed(2));
  });
  $('#cart-total').text('$' + total.toFixed(2));
}

$('.quantity input').on('input', calculateTotalPrice);

$('#addItem').submit(function(event) {
  event.preventDefault();
  let product =  [
      { name: 'Banana', price: 1.25 },
      { name: 'Onion', price: 0.75 },
      { name: 'Salmon', price: 15.99 },
      { name: 'Chicken', price: 7.00 },
      { name: 'Pepper', price: 2.00 },
      { name: 'Orange ', price: 3.00 },
      { name: 'Tomato', price: 0.99 },
      { name: 'Deodorant', price: 5.25 },
      { name: 'Shampoo', price: 4.75 }
    ];
  $(this).find('select[name="product"]').val();
  calculateTotalPrice();
});

$('.remove').on('click', function() {
  $(this).parent().parent().remove();
  calculateTotalPrice();
});
