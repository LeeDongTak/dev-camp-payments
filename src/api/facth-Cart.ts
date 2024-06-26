import axios from "axios";

export const fetchCart = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/cart`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
