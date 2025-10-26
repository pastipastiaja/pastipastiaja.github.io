import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { useState } from "react";
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

const allProducts = [
  { id: 1, name: "Daily Multivitamin", price: "$12.99", category: "vitamins-supplements", image: multivitaminImg },
  { id: 2, name: "Vitamin D3", price: "$9.99", category: "vitamins-supplements", image: vitaminD3Img },
  { id: 3, name: "Omega-3 Fish Oil", price: "$18.99", category: "vitamins-supplements", image: multivitaminImg },
  { id: 4, name: "Calcium + Vitamin D", price: "$14.99", category: "vitamins-supplements", image: vitaminD3Img },
  { id: 5, name: "Pain Relief Extra Strength", price: "$8.99", category: "pain-relief", image: painReliefImg },
  { id: 6, name: "Headache Relief", price: "$7.49", category: "pain-relief", image: headacheReliefImg },
  { id: 7, name: "Muscle Pain Reliever", price: "$11.99", category: "pain-relief", image: painReliefImg },
  { id: 8, name: "Back Pain Relief", price: "$13.49", category: "pain-relief", image: headacheReliefImg },
  { id: 9, name: "Allergy Relief 24HR", price: "$15.99", category: "allergy-sinus", image: allergyReliefImg },
  { id: 10, name: "Nasal Spray", price: "$11.99", category: "allergy-sinus", image: nasalSprayImg },
  { id: 11, name: "Allergy Eye Drops", price: "$9.99", category: "allergy-sinus", image: allergyReliefImg },
  { id: 12, name: "Sinus Relief", price: "$12.99", category: "allergy-sinus", image: nasalSprayImg },
  { id: 13, name: "Cold & Flu Relief", price: "$13.99", category: "cold-flu", image: coldFluImg },
  { id: 14, name: "Cough Syrup", price: "$9.99", category: "cold-flu", image: coughSyrupImg },
  { id: 15, name: "Throat Lozenges", price: "$6.99", category: "cold-flu", image: coldFluImg },
  { id: 16, name: "Flu Relief Capsules", price: "$14.99", category: "cold-flu", image: coughSyrupImg },
  { id: 17, name: "First Aid Kit", price: "$24.99", category: "first-aid", image: firstAidKitImg },
  { id: 18, name: "Bandages Assorted", price: "$5.99", category: "first-aid", image: bandagesImg },
  { id: 19, name: "Antiseptic Spray", price: "$7.99", category: "first-aid", image: firstAidKitImg },
  { id: 20, name: "Medical Tape", price: "$4.99", category: "first-aid", image: bandagesImg },
  { id: 21, name: "Hand Sanitizer", price: "$4.99", category: "personal-care", image: handSanitizerImg },
  { id: 22, name: "Moisturizing Lotion", price: "$8.99", category: "personal-care", image: lotionImg },
  { id: 23, name: "Body Wash", price: "$6.99", category: "personal-care", image: handSanitizerImg },
  { id: 24, name: "Sunscreen SPF 50", price: "$12.99", category: "personal-care", image: lotionImg },
  { id: 25, name: "Face Cream", price: "$19.99", category: "beauty", image: lotionImg },
  { id: 26, name: "Facial Cleanser", price: "$11.99", category: "beauty", image: handSanitizerImg },
  { id: 27, name: "Anti-Aging Serum", price: "$29.99", category: "beauty", image: lotionImg },
  { id: 28, name: "Makeup Remover", price: "$8.99", category: "beauty", image: handSanitizerImg },
];

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

  const categorySlug = category || "all";
  const info = categoryInfo[categorySlug] || { title: "All Products", description: "Browse our complete selection of health and wellness products" };
  
  const filteredProducts = categorySlug === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === categorySlug);

  const searchedProducts = searchTerm
    ? filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredProducts;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Categories
          </Link>
          <h1 className="mb-2 text-4xl font-bold">{info.title}</h1>
          <p className="text-lg text-muted-foreground">{info.description}</p>
        </div>

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

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{searchedProducts.length} products found</p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-primary">{product.price}</p>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
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
