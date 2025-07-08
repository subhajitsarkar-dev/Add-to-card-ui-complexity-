import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

const ShoppingCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <img
            src={
              "https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            }
            // alt={title}
            className="aspect-square w-full object-cover"
          />
        </CardHeader>
        <CardContent>
          {/* <h2 className="text-lg font-semibold text-foreground line-clamp-2">{title}</h2> */}
          <div className="flex items-center justify-between">
            {/* <span className="text-primary text-xl font-bold">${price.toFixed(2)}</span> */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <StarIcon className="h-4 w-4 text-yellow-500" />
              {/* {rating.toFixed(1)} */}4.5
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ShoppingCard;
