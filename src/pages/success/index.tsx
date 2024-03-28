import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Success = () => {
  const { push } = useRouter();
  return (
    <Card
      className={cn(
        " fixed top-[20%] left-[50%] translate-x-[-50%] w-[1000px]"
      )}
    >
      <CardHeader>
        <CardTitle className={cn("mx-auto text-[2.5rem]")}>
          결제에 성공하엿습니다.
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("mt-7 mx-auto w-[500px]")}>
        <Button
          variant={"link"}
          className={cn("bg-[none] text-[1rem] gap-2")}
          onClick={() => {
            push("/");
          }}
        >
          <AiOutlineArrowLeft />
          홈으로
        </Button>
      </CardContent>
    </Card>
  );
};

export default Success;
