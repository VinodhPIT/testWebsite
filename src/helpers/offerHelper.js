export const calculateMetrics = (
  initialCounts,
  totalOfferCount,
  selectedCurrency
) => {
  const sendOffers =
    initialCounts?.filter((item) => item.created_date !== null) || [];

  const conversionRate =
    totalOfferCount === 0
      ? 0
      : Math.floor((sendOffers.length / totalOfferCount) * 100);

  const offerCount =
    initialCounts?.filter((item) => item.amounts !== null).length || 0;

  const offersWithSelectedCurrency =
    initialCounts?.filter((item) => item.currency === selectedCurrency.value) ||
    [];

  const sumWithInitial = offersWithSelectedCurrency.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amounts,
    0
  );

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < initialCounts.length; i++) {
      totalAmount += initialCounts[i].amounts;
    }
    return totalAmount;
  };
  const avgOrderValue =
    offerCount === 0 ? 0 : Math.floor(sumWithInitial / offerCount);

  return {
    conversionRate,
    offerCount,
    offersWithSelectedCurrency,
    sumWithInitial,
    getTotalAmount,
    avgOrderValue,
  };
};
