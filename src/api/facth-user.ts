import axios from 'axios';

export const fetchUser = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}user`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
