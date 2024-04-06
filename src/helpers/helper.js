import moment from "moment";

export const prepareRequest = (parameters) => {
  const request = {
    sort: parameters.sort,
    page_no: "0",
    paginator_count: parameters.paginator_count,
    search_key: "",
  };

  return request;
};

const createRequestObject = (parameters, paginatorCount) => {
  const request = {
    sort: parameters.category === "artist" ? "newest" : "random",
    page_no: parameters.page_no,
    paginator_count: paginatorCount,
    search_key: parameters.search_key,
    seed: parameters.seed,
  };

  if (parameters.latitude && parameters.category === "artist") {
    request.longitude = parameters.longitude;
    request.latitude = parameters.latitude;
  }

  if (parameters.style) {
    if (typeof parameters.style === "string") {
      request.style = parameters.style.split(",").map((item) => item.trim());
    } else if (Array.isArray(parameters.style)) {
      request.style = parameters.style;
    } else {
      request.style = [];
    }
  } else {
    request.style = [];
  }

  return request;
};


const createRequestObject1 = (parameters, paginatorCount) => {
  const request = {
    sort:null,
    page_no: parameters.page_no,
    paginator_count: paginatorCount,
    search_key: parameters.search_key,
    distance:"50km",
    
  };

  if (parameters.latitude) {
    request.longitude = parameters.longitude;
    request.latitude = parameters.latitude;
  }

  if (parameters.style) {
    if (typeof parameters.style === "string") {
      request.style = parameters.style.split(",").map((item) => item.trim());
    } else if (Array.isArray(parameters.style)) {
      request.style = parameters.style;
    } else {
      request.style = [];
    }
  } else {
    request.style = [];
  }


  return request;
};




export const searchParam1 = (parameters) => {
  return createRequestObject1(parameters, 10);
};

export const searchParam = (parameters) => {
  return createRequestObject(parameters, 24);
};

export const fetchMulticategory = (parameters) => {
  return createRequestObject(parameters, 12);
};

export const addAdsToResults = async (results, isMobile) => {
  const totalCount = results.length;
  if (totalCount < 15) {
    return results;
  }
  if (
    isMobile === "iPad" ||
    isMobile === "UnknownTablet" ||
    isMobile === null
  ) {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
  } else {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
  }

  if (isMobile === "iPad") {
    results.splice(17, 0, { _index: "ad", colspan: 2, add: 2 });
  } else if (isMobile === "UnknownTablet") {
    results.splice(18, 0, { _index: "ad", colspan: 2, add: 2 });
  } else if (isMobile === null) {
    results.splice(12, 0, { _index: "ad", colspan: 2, add: 2 });
  } else {
    results.splice(19, 0, { _index: "ad", colspan: 2, add: 2 });
  }

  results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });

  results.forEach((item) => {
    if (item._index !== "ad") {
      item.colspan = 1;
    }
  });

  return results;
};

export const formatDate = (date) => {
  const values = Object.values(date).reverse();
  const dateObject = new Date(values[0], values[1] - 1, values[2]);
  return dateObject.toISOString().split("T")[0];
};

export const startYear = 2020;
export const currentYear = new Date().getFullYear();
export const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => startYear + index
);

export const options = years.map((year) => ({ value: year, label: year }));

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const calculatePercentage = (...args) => {
  const numbers = args.map((arg) => parseFloat(arg) || 0);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const averagePercentage = sum / numbers.length; // Divide by the count of values
  return averagePercentage.toFixed(2);
};

export const extractData = (data, propertyName) => {
  return Object.values(data).map((el) => parseFloat(el[propertyName] || 0));
};

export const filterChartDataByYear = (chartData, year, key) => {
  return chartData.filter((item) => moment(item[key]).year() === year);
};

// Function to get countries and average time to get contacted
export const getContactTimeDifference = (chartData) => {
  const dateDifferenceArray = {};
  chartData.map((data) => {
    if (data.contacted_time != null) {
      const start = moment(data.created_date);
      const end = moment(data.contacted_time);
      if (!dateDifferenceArray[data.country]) {
        dateDifferenceArray[data.country] = {
          totalTime: end.diff(start, "days"),
          count: 1,
        };
      } else {
        dateDifferenceArray[data.country].totalTime += end.diff(start, "days");
        dateDifferenceArray[data.country].count += 1;
      }
    }
  });

  for (const country in dateDifferenceArray) {
    dateDifferenceArray[country].averageTime =
      dateDifferenceArray[country].totalTime /
      dateDifferenceArray[country].count;
  }

  return dateDifferenceArray;
};





const getCountry = (locations, location) => {
  const textBeforeComma = location.split(",")[0].trim();

  let locationCity = [];
  let otherStudiocity = [];
  if (textBeforeComma) {
    locationCity = locations.filter(
      (e) => e.city === textBeforeComma || e.country === textBeforeComma
    );

    otherStudiocity = locations.filter(
      (e) => e.city !== textBeforeComma || e.country !== textBeforeComma
    );

    const filterLocations = [...locationCity, ...otherStudiocity];

    return ` ${filterLocations[0].city} , ${filterLocations[0].country} `;
  }
  return `${locations[0].city} , ${locations[0].country}`;
};

export { getCountry };
