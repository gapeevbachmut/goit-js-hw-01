'use strict';

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return message;
}
