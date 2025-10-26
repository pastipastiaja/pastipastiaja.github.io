import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { allProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { name: "Vitamins & Supplements", slug: "vitamins-supplements" },
    { name: "Pain Relief", slug: "pain-relief" },
    { name: "Allergy & Sinus", slug: "allergy-sinus" },
    { name: "Cold & Flu", slug: "cold-flu" },
    { name: "First Aid", slug: "first-aid" },
    { name: "Personal Care", slug: "personal-care" },
    { name: "Beauty", slug: "beauty" },
  ];

  const filteredProducts = searchTerm
    ? allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase()))
    : allProducts;

  const handleAddToCart = (e: React.MouseEvent, product: typeof allProducts[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold" data-testid="text-page-title">Shop All Products</h1>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-4 font-semibold">Categories</h3>
                <div className="space-y-2">
                  <Link
                    to="/shop"
                    className="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                    data-testid="link-category-all"
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/shop/category/${category.slug}`}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                      data-testid={`link-category-${category.slug}`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground" data-testid="text-product-count">{filteredProducts.length} products found</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link 
                  key={product.id}
                  to={`/shop/product/${product.id}`}
                  data-testid={`card-product-${product.id}`}
                >
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full">
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                        data-testid={`img-product-${product.id}`}
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="mb-1 text-xs text-muted-foreground" data-testid={`text-category-${product.id}`}>{product.category}</p>
                      <h3 className="mb-2 font-semibold line-clamp-2" data-testid={`text-name-${product.id}`}>{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2" data-testid={`text-description-${product.id}`}>{product.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-primary" data-testid={`text-price-${product.id}`}>{product.price}</p>
                        <Button 
                          size="sm" 
                          onClick={(e) => handleAddToCart(e, product)}
                          data-testid={`button-add-cart-${product.id}`}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
