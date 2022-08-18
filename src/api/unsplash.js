import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID c3l22xetrRyZFicmaGBlIQeN2Z7oXkUFVs2DuTvL4EU",
  },
});

