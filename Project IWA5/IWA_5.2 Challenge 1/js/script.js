const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;
const batteries = 35 * 2;
const pens = 5 * 0;

const total = shoes + toys + shirts + batteries + pens
let shippingCost = null;
const currency = 'R';
const customers = 1
const shipping = null

if (total > 1000){
  if (location === 'NAM' && customers == 1){
    if (location === 'RSA'){
      shippingCost = 0 || calcShipping;
    }

  }
  if (shippingCost === 400 && customers !==1){
    console.log(FREE_WARNING);
  }}else{
    if(location === 'NAM') {
      shippingCost = 600;
    }else{
      shippingCost = 800;
    }
  }

  if (location === 'NK' && shipping === null){console.log(BANNED_WARNING);}
  const totalCost = total + shippingCost;
  console.log('Price:' + currency + totalCost);

  