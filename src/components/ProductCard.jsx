import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// Static placeholder: your fetched product data and the add-to-cart handler plug in here.
function ProductCard() {
  return (
    <Card>
      <div className="mx-4 aspect-square rounded-lg bg-muted" />
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          Category
        </Badge>
        <CardTitle>Product name</CardTitle>
        <CardDescription>A short description of the product.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">$0.00</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  )
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
      <CardFooter>
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  )
}

export { ProductCard, ProductCardSkeleton }
