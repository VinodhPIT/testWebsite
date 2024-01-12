export const getUrl = (catgy, term, style, address, router) => {
  return new Promise((resolve, reject) => {
    const categoryMapping = {
      tattoo: "tattoos",
      flash: "flash-tattoos",
      artist: "tattoo-artists",
      all: "all",
    };
    const category = categoryMapping[catgy] || null;

    let url = `/${router.locale}/explore/${category}/`;

    const queryParams = {};

    if (term) {
      queryParams.keyword = term;
    }

    if (style) {
      queryParams.style = style;
    }

    if (category === "tattoo-artists" && address !== "") {
      queryParams.location = address;
    }
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
