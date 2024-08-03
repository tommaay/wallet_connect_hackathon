"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";

import { Button } from "ui/button";
import { Text } from "ui/text";

export function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <Button className="rounded-full sm:min-w-32 md:min-w-40" onClick={() => open()}>
      <Text>Connect</Text>
    </Button>
  );
}
