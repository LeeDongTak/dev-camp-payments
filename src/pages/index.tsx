import Info from "@/components/component/info/Info";
import Payments from "@/components/component/payments/Payments";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useFetchUserQuery from "@/hooks/usefetchUserQuery";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useFetchUserQuery();

  return (
    <Card className={cn("mx-auto w-[800px] mt-[30px] bg-[#fafafa]")}>
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
        <ResizablePanel defaultSize={40}>
          <Payments />
        </ResizablePanel>
      </ResizablePanelGroup>
    </Card>
  );
}
