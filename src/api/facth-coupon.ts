import axios from "axios";

export const fetchCoupon = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/coupon`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
