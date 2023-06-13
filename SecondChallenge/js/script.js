const WeekDays = 7
const RentPerDayCost = '$40'
const OfferSevenMore = '$50'
const OfferThreeMore = '$20'




function CostForRental(WeekDays) {
    console.log(WeekDays * RentPerDayCost - (WeekDays >= 7 ? OfferSevenMore : WeekDays >= 3 ? OfferThreeMore : 0)) ;
  }



CostForRental(1)
CostForRental(2)
CostForRental(3)
CostForRental(4)
