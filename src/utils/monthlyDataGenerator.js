import getMonthName from "./dateUtils";

export const processData = (apiResponse) => {
  const monthlyArray = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    app: 0,
    referredCustomers: 0,
    month: getMonthName(index + 1),
  }));

  apiResponse.forEach((item) => {
    if (item.created_date) {
      const dateString = item.created_date;
      const dateOnly = dateString.split(" ")[0];
      const monthIndex = parseInt(dateOnly.split("-")[1], 10) - 1;
      if (item.lead_source === "APP") {
        monthlyArray[monthIndex].app += 1;
      } else if (item.lead_source === "REFERRAL") {
        monthlyArray[monthIndex].referredCustomers += 1;
      }
    }
  });

  return monthlyArray;
};
