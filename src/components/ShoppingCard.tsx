import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import type { Product } from "../lib/types";

const ShoppingCard = ({ item }: { item: Product }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <img
            src={item.images[0]}
            alt={item.title}
            className="aspect-square w-full object-cover"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold text-foreground line-clamp-2">
            {item.title}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-primary text-xl font-bold">
              ${item.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <StarIcon className="h-4 w-4 text-yellow-500" />
              {/* {item.toFixed(1)} */}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ShoppingCard;
