


import getMonthName from "./dateUtils";

export const processData = (apiResponse, processingType) => {
  const monthlyArray = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    month: getMonthName(index + 1),
    ...(processingType === "type1" && { app: 0, referredCustomers: 0 }),
    ...(processingType === "type2" && { scheduled: 0 }),
  }));

  apiResponse.forEach((item) => {
    let monthIndex;
    let dateString;
    if (processingType === "type1") {
      const dateString = item.created_date;
      const dateOnly = dateString.split(" ")[0];
      const monthIndex = parseInt(dateOnly.split("-")[1], 10) - 1;
      if (item.lead_source !== "REFERRAL") {
        monthlyArray[monthIndex].app += 1;
      } else if (item.lead_source === "REFERRAL") {
        monthlyArray[monthIndex].referredCustomers += 1;
      }
    } else if (processingType === "type2") {
      if (!item.offer_date) return;
      dateString = item.offer_date;
      monthIndex = parseInt(dateString.split("-")[1], 10) - 1;
      monthlyArray[monthIndex].scheduled += 1;
    }
  });

  return monthlyArray;
};

