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
  // 0. get data for products using the hook useEffect() from FakeStore API
  // 1. display product info and images in the ProductCard component
  2. test App.jsx for fetching FakeStore API
  3. display products added to the cart in the Sheet component
*/

function App() {
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }

        const result = await response.json();
        const arr = result.slice(0, 4);
        setProducts(arr);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }

    getData();
  }, []);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
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
            <Badge>{quantity}</Badge>
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

      <main className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            id={p.id}
            title={p.title}
            price={p.price}
            category={p.category}
            description={p.description}
            image={p.image}
            onAdd={handleAdd}
          />
        ))}
        <ProductCardSkeleton />
      </main>
    </div>
  );
}

export default App;
