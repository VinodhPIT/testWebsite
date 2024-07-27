



export const getUrl = (catgy, term, style, address, router) => {
  console.log(catgy,"catgycatgycatgy")

  return new Promise((resolve, reject) => {
    let url = `/${router.locale}/${catgy}/`;
    const queryParams = {};

    if (term) {
      queryParams.keyword = term;
    }

    if (style) {
      queryParams.style = style;
    }

    // if (category === "tattoo-artists" && address !== "") {
    //   queryParams.location = address;
    // }
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join("&");

    if (queryString) {
      url += `?${queryString}`;
    }

    router
      .push(url)
      .then(() => {
        resolve("Navigation succeeded");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
