import { z } from "zod";

const numRegex = /^[0-9]*$/; // 숫자만 체크

export const pointRegisterSchema = z.object({
  point: z
    .string()
    .refine((value) => numRegex.test(value), "숫자만 입력가능합니다. "),
});
