import { ModeToggle } from "components/ModeToggle";
import { ConnectButton } from "components/ConnectButton";

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-end items-center gap-4 bg-background border-b border-border">
      <ConnectButton />
      <ModeToggle />
    </nav>
  );
}
