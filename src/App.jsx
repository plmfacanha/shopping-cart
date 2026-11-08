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
import getProducts from "@/api/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (e) {
        console.error(e.message);
        setError(e);
      }
    }
    fetchData();
  }, []);

  const handleAdd = (product) => {
    const isDuplicate = cart.some((p) => p.id === product.id);

    if (!isDuplicate) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCart((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        ),
      );
    }
  };

  const handleRemove = (product) => {
    console.log(`This ${product.title} was removed!`);
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
            <Badge>
              {cart.reduce((acc, currProduct) => {
                return acc + currProduct.quantity;
              })}
            </Badge>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your cart</SheetTitle>
              <SheetDescription>
                Review your items before checkout.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 px-4">
              {cart ? (
                <>
                  {cart.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <p>{c.title}</p>
                      <Badge variant="secondary" onClick={handleRemove}>
                        x{c.quantity}
                      </Badge>
                    </div>
                  ))}
                </>
              ) : (
                <p>Cart is empty</p>
              )}
            </div>

            <Separator />
            <SheetFooter>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  {cart ? cart.map((c) => <p>${c.price}</p>) : <p>$0.00</p>}
                </span>
              </div>
              <Button className="w-full">Checkout</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </header>

      <main className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {error ? (
          <p>Page couldn't load: {error.message}</p>
        ) : (
          products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              category={p.category}
              description={p.description}
              image={p.image}
              onAdd={() => handleAdd(p)}
            />
          ))
        )}
        <ProductCardSkeleton />
      </main>
    </div>
  );
}

export default App;
