import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Store } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/* 
  TODO: React testing
  * Remember about it.todo() for a list of future tests
  // 1. Ask Claude to generate files and modify config.js if neeeded
  // 2. check if <h1> is being displayed with the correct text
  3. Check if once a user clicks in the 'Add to Cart' the jest-dom receives that event. //? display simple message to confirm it
  4. Test if product was added to the cart
*/

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Store />
          <h1 className="text-3xl font-bold">FucaSurf Shop</h1>
        </div>

        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Cart
            <Badge>0</Badge>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your cart</SheetTitle>
              <SheetDescription>
                Review your items before checkout.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 px-4">
              <p className="text-sm text-muted-foreground">
                Your cart is empty.
              </p>
            </div>

            <Separator />
            <SheetFooter>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$0.00</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </header>

      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCardSkeleton />
      </main>
    </div>
  );
}

export default App;
