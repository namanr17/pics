import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 224f356109e370351c69d3060b6e86a2f8d347db7ce5cac0ffe59ccc2c80b6bd"
  }
});
