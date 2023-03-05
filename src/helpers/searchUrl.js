export function searchURL(url) {
  if (url) {
    let splitURL = url.split("/");
    let splitURL_SECOND_POSITION = splitURL[1];
    return splitURL_SECOND_POSITION;
  }
}
export function searchURL_FOR_PRICE(url) {
  if (url) {
    let splitPrice = url.split("price");
    let firstPrice = splitPrice[1]?.split("=")[1]?.split("&")[0];
    let secondPrice = splitPrice[2]?.split("=")[1];
    return [firstPrice, secondPrice];
  }
}
