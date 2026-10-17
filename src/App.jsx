import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Shop</h1>

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
