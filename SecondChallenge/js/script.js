const SevenDays = 7
const RentPerDayCost = 40
const OfferSevenMore = 50
const OfferThreeMore = 20




function CostForRental(SevenDays) {
console.log(SevenDays * RentPerDayCost - (SevenDays >= 7 ? OfferSevenMore : SevenDays >= 3 ? OfferThreeMore : 0)) ;
  }



CostForRental(1)
CostForRental(2)






















