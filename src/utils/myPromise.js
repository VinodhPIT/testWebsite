const myPromise = (newItemImage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newItemImage);
      }, 1000);
    });
  };
  
  export default myPromise;