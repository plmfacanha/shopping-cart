import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Store } from "lucide-react";
import { useState, useEffect } from "react";
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
  TODO: fetch API with product info and images
  0. get data for products using the hook useEffect()
  1. display product info and images in the ProductCard component
  3. ensure product items are being displayed in the Sheet component when item is added to the cart
*/

function App() {
  const [items, setItems] = useState(0);

  useEffect(() => {
    async function getData() {
      console.log("useEffect() here");
    }

    getData();
  }, []);

  const handleAdd = () => {
    setItems((prev) => prev + 1);
  };

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
            <Badge>{items}</Badge>
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
        <ProductCard onAdd={handleAdd} />
        <ProductCard onAdd={handleAdd} />
        <ProductCard onAdd={handleAdd} />
        <ProductCardSkeleton />
      </main>
    </div>
  );
}

export default App;
