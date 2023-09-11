const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let shipping;
let currency = '';
let customers = 1; 

const userLocation = 'RSA'; 
const totalCost = 1270; 

// Define or calculate the variables
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED; // Use the NONE_SELECTED constant
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; // Use the NONE_SELECTED constant

if (userLocation === 'RSA') {
  if (customers === 1 && (totalCost >= 1000 || currency === 'R')) {
    shipping = 0; 
  } else {
    shipping = 400; 
  }
} else if (userLocation === 'NAM') {
  if (customers === 1) {
    shipping = 600; // Shipping is $600 for NAM customers
  } else {
    console.log('WARNING: ' + FREE_WARNING);
  }
} else if (userLocation === 'NK') {
  console.log('WARNING: ' + BANNED_WARNING);
} else {
  console.log('WARNING: Invalid location');
  shipping = 800; // Default shipping cost for all other countries
}

console.log('Price:', currency, totalCost + shipping);
