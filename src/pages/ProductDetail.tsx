import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: (
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          <span>{product.name} has been added to your cart</span>
        </div>
      ),
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/shop" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          data-testid="link-back-shop"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-secondary/20">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-full w-full object-cover"
                data-testid="img-product"
              />
            </div>
          </Card>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2" data-testid="text-category">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold mb-4" data-testid="text-product-name">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary" data-testid="text-price">
                {product.price}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                  {product.description}
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">Product Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <Link 
                      to={`/shop/category/${product.categorySlug}`}
                      className="text-primary hover:underline"
                      data-testid="link-category"
                    >
                      {product.category}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product ID:</span>
                    <span data-testid="text-product-id">#{product.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Features & Benefits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>High quality pharmaceutical grade product</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Tested for purity and potency</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Free shipping on orders over $50</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
