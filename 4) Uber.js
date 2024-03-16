class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
    }
    calculatePrice(distanceInMiles, durationInMinutes) {
      const distanceCost = distanceInMiles * this.costPerMile;
      const timeCost = durationInMinutes * this.costPerMinute;
      const totalCost = this.baseFare + distanceCost + timeCost + this.bookingFee;
      return totalCost.toFixed(2);
    }
  }
  const uberXCalculator = new UberPriceCalculator(2.00, 0.35, 1.15, 2.50);
  const price = uberXCalculator.calculatePrice(5, 15);
  console.log(`The price of your Uber ride is: $${price}`);
  