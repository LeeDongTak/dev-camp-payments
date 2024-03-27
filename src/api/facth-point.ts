import axios from "axios";

export const fetchPoint = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/point`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
