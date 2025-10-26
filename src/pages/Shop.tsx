import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import multivitaminImg from "@/assets/products/multivitamin.jpg";
import vitaminD3Img from "@/assets/products/vitamin-d3.jpg";
import painReliefImg from "@/assets/products/pain-relief.jpg";
import headacheReliefImg from "@/assets/products/headache-relief.jpg";
import allergyReliefImg from "@/assets/products/allergy-relief.jpg";
import nasalSprayImg from "@/assets/products/nasal-spray.jpg";
import coldFluImg from "@/assets/products/cold-flu.jpg";
import coughSyrupImg from "@/assets/products/cough-syrup.jpg";
import firstAidKitImg from "@/assets/products/first-aid-kit.jpg";
import bandagesImg from "@/assets/products/bandages.jpg";
import handSanitizerImg from "@/assets/products/hand-sanitizer.jpg";
import lotionImg from "@/assets/products/lotion.jpg";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Vitamins & Supplements", slug: "vitamins-supplements" },
    { name: "Pain Relief", slug: "pain-relief" },
    { name: "Allergy & Sinus", slug: "allergy-sinus" },
    { name: "Cold & Flu", slug: "cold-flu" },
    { name: "First Aid", slug: "first-aid" },
    { name: "Personal Care", slug: "personal-care" },
    { name: "Beauty", slug: "beauty" },
  ];

  const products = [
    { id: 1, name: "Daily Multivitamin", price: "$12.99", category: "Vitamins & Supplements", image: multivitaminImg },
    { id: 2, name: "Vitamin D3", price: "$9.99", category: "Vitamins & Supplements", image: vitaminD3Img },
    { id: 3, name: "Pain Relief Extra Strength", price: "$8.99", category: "Pain Relief", image: painReliefImg },
    { id: 4, name: "Headache Relief", price: "$7.49", category: "Pain Relief", image: headacheReliefImg },
    { id: 5, name: "Allergy Relief 24HR", price: "$15.99", category: "Allergy & Sinus", image: allergyReliefImg },
    { id: 6, name: "Nasal Spray", price: "$11.99", category: "Allergy & Sinus", image: nasalSprayImg },
    { id: 7, name: "Cold & Flu Relief", price: "$13.99", category: "Cold & Flu", image: coldFluImg },
    { id: 8, name: "Cough Syrup", price: "$9.99", category: "Cold & Flu", image: coughSyrupImg },
    { id: 9, name: "First Aid Kit", price: "$24.99", category: "First Aid", image: firstAidKitImg },
    { id: 10, name: "Bandages Assorted", price: "$5.99", category: "First Aid", image: bandagesImg },
    { id: 11, name: "Hand Sanitizer", price: "$4.99", category: "Personal Care", image: handSanitizerImg },
    { id: 12, name: "Moisturizing Lotion", price: "$8.99", category: "Personal Care", image: lotionImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Shop All Products</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Categories Sidebar */}
          <div>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-4 font-semibold">Categories</h3>
                <div className="space-y-2">
                  <Link
                    to="/shop"
                    className="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/shop/category/${category.slug}`}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{products.length} products found</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="aspect-square overflow-hidden bg-secondary/20">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="mb-1 text-xs text-muted-foreground">{product.category}</p>
                    <h3 className="mb-2 font-semibold">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
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
