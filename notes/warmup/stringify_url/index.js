let stringify = (url, query) => {
  url += "?";
  for (let key in query) {
    url += `${key}=${query[key]}&`;
  }
  return url
}

let url = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
}
console.log(stringify(url, query)); //"http://localhost:8080/monkeys?color=black&species=howler";