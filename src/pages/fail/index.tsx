import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Fail = () => {
  const { push } = useRouter();
  return (
    <Card
      className={cn(
        " fixed top-[20%] left-[50%] translate-x-[-50%] w-[1000px]"
      )}
    >
      <CardHeader>
        <CardTitle className={cn("mx-auto text-[2.5rem]")}>
          결제에 실패하였습니다. 다시시도해 주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("mt-7 mx-auto w-[830px]")}>
        <Button
          variant={"link"}
          className={cn("bg-[none] text-[1rem] gap-2")}
          onClick={() => {
            push("/");
          }}
        >
          <AiOutlineArrowLeft />
          다시결제하러 가기
        </Button>
      </CardContent>
    </Card>
  );
};

export default Fail;
