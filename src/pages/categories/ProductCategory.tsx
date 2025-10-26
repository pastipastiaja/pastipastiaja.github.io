import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { getProductsByCategory, allProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const categoryInfo: Record<string, { title: string; description: string }> = {
  "vitamins-supplements": {
    title: "Vitamins & Supplements",
    description: "Essential vitamins and dietary supplements for your health and wellness"
  },
  "pain-relief": {
    title: "Pain Relief",
    description: "Effective solutions for headaches, muscle pain, and general discomfort"
  },
  "allergy-sinus": {
    title: "Allergy & Sinus",
    description: "Relief from allergies, sinus pressure, and seasonal symptoms"
  },
  "cold-flu": {
    title: "Cold & Flu",
    description: "Combat cold and flu symptoms with our trusted remedies"
  },
  "first-aid": {
    title: "First Aid",
    description: "Essential supplies for treating minor injuries and wounds"
  },
  "personal-care": {
    title: "Personal Care",
    description: "Daily essentials for hygiene and personal wellness"
  },
  "beauty": {
    title: "Beauty",
    description: "Skincare and beauty products for radiant, healthy skin"
  },
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categorySlug = category || "all";
  const info = categoryInfo[categorySlug] || { title: "All Products", description: "Browse our complete selection of health and wellness products" };
  
  const filteredProducts = categorySlug === "all" 
    ? allProducts 
    : getProductsByCategory(categorySlug);

  const searchedProducts = searchTerm
    ? filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredProducts;

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
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4" data-testid="link-back-shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Categories
          </Link>
          <h1 className="mb-2 text-4xl font-bold" data-testid="text-category-title">{info.title}</h1>
          <p className="text-lg text-muted-foreground" data-testid="text-category-description">{info.description}</p>
        </div>

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

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground" data-testid="text-product-count">{searchedProducts.length} products found</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchedProducts.map((product) => (
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
                  <h3 className="mb-2 font-semibold line-clamp-2" data-testid={`text-name-${product.id}`}>{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
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

        {searchedProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductCategory;
