import Info from "@/components/component/info/Info";
import Payments from "@/components/component/payments/Payments";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useFetchUserQuery from "@/hooks/useFetchUser";
import { cn } from "@/lib/utils";
import useTotalPriceStore from "@/store/total-price";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useLayoutEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useFetchUserQuery();
  const { resetState } = useTotalPriceStore();

  useLayoutEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  return (
    <>
      <Head>
        <title>결제하기 홈</title>
      </Head>
      <Card className={cn("mx-auto w-[1400px] mt-[30px] bg-[#fafafa]")}>
        <CardHeader>
          <CardTitle className={cn("mx-auto text-[#555]")}>결제하기</CardTitle>
        </CardHeader>
        <ResizablePanelGroup
          direction="horizontal"
          className="px-[20px] flex gap-[20px]"
        >
          <ResizablePanel defaultSize={60}>
            <Info />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <Payments />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Card>
    </>
  );
}
