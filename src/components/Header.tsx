import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Button asChild variant="link" size="sm">
            <Link to="/">My App</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
