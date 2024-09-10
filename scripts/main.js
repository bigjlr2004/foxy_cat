fetch(`https://randomfox.ca/floof`)
  .then((response) => response.json())
  .then((convertedData) => {
    const foxImageElement = document.querySelector("#fox");
    foxImageElement.src = convertedData.image;
  });

const GetDogs = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const convertedData = await response.json();
  const dogImgUrl = convertedData.url;
  const dogImageElement = document.querySelector("#cat");
  dogImageElement.src = dogImgUrl;
};

GetDogs();
