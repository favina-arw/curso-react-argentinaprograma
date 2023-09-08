export default class Service {
  static async getUsers() {
    return fetch("https://fakestoreapi.com/users").then((res) => res.json());
  }

  static async getUserCart(id) {
    return fetch("https://fakestoreapi.com/carts/user/" + id).then((res) =>
      res.json()
    );
  }

  static async getProducts(filter = "", signal) {
    const url =
      filter && filter.length > 0
        ? "https://fakestoreapi.com/products" + "/" + filter
        : "https://fakestoreapi.com/products";

    return new Promise((resolve, reject) => {
      fetch(url, { signal })
        .then((response) => response.json)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });

    /*     fetch("https://fakestoreapi.com/products").then((res) => res.json()); */
  }

  static async getProductById(id) {
    fetch("https://fakestoreapi.com/products/" + id).then((res) => res.json());
  }
}
