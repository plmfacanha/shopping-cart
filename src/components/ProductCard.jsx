import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Static placeholder: your fetched product data and the add-to-cart handler plug in here.
export default function ProductCard({ ...props }) {
  return (
    <Card>
      <div className="mx-4 aspect-square rounded-lg bg-muted p-2">
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
          className="size-full object-contain mix-blend-multiply"
        />
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          {props.category}
        </Badge>
        <CardTitle className="line-clamp-2 min-h-[2lh]">
          {props.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">
          ${Number(props.price).toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" onClick={props.onAdd}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

// Same shape as ProductCard, shown while the API request is in flight.
function ProductCardSkeleton() {
  return (
    <Card>
      <Skeleton className="mx-4 aspect-square rounded-lg" />
      <CardHeader>
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 w-16" />
      </CardContent>
      <CardFooter className="mt-auto">
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  );
}

export { ProductCard, ProductCardSkeleton };
