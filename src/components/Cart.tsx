import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge 
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              data-testid="badge-cart-count"
            >
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle data-testid="text-cart-title">Shopping Cart ({cartCount} items)</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col h-full">
          {cart.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground" data-testid="text-empty-cart">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {cart.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex gap-4 border-b pb-4"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-20 w-20 object-cover rounded"
                      data-testid={`cart-item-image-${item.id}`}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold" data-testid={`cart-item-name-${item.id}`}>{item.name}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`cart-item-category-${item.id}`}>{item.category}</p>
                      <p className="font-bold text-primary mt-1" data-testid={`cart-item-price-${item.id}`}>{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          data-testid={`button-decrease-${item.id}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center" data-testid={`cart-item-quantity-${item.id}`}>{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          data-testid={`button-increase-${item.id}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-destructive"
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span data-testid="text-total-label">Total:</span>
                  <span data-testid="text-total-amount">{getCartTotal()}</span>
                </div>
                <Button className="w-full" size="lg" data-testid="button-checkout">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
