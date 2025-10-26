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
import vitamin1 from "@/assets/stock_images/vitamin_bottles_supp_dde79373.jpg";
import vitamin2 from "@/assets/stock_images/vitamin_bottles_supp_ea426bb3.jpg";
import vitamin3 from "@/assets/stock_images/vitamin_bottles_supp_2827786f.jpg";
import vitamin4 from "@/assets/stock_images/vitamin_bottles_supp_0fb08f2d.jpg";
import vitamin5 from "@/assets/stock_images/vitamin_bottles_supp_3c2714d7.jpg";
import medicine1 from "@/assets/stock_images/medicine_pills_table_99eb9d32.jpg";
import medicine2 from "@/assets/stock_images/medicine_pills_table_7f21e1a4.jpg";
import medicine3 from "@/assets/stock_images/medicine_pills_table_639c6254.jpg";
import medicine4 from "@/assets/stock_images/medicine_pills_table_3b865f9e.jpg";
import medicine5 from "@/assets/stock_images/medicine_pills_table_1ac2a3ce.jpg";
import beauty1 from "@/assets/stock_images/skincare_beauty_prod_73dcbf1b.jpg";
import beauty2 from "@/assets/stock_images/skincare_beauty_prod_48cbb688.jpg";
import beauty3 from "@/assets/stock_images/skincare_beauty_prod_8b1c9455.jpg";
import beauty4 from "@/assets/stock_images/skincare_beauty_prod_25523f9c.jpg";
import beauty5 from "@/assets/stock_images/skincare_beauty_prod_b8a02a1b.jpg";
import firstAid1 from "@/assets/stock_images/first_aid_medical_su_5ec4f0be.jpg";
import firstAid2 from "@/assets/stock_images/first_aid_medical_su_192a0d16.jpg";
import firstAid3 from "@/assets/stock_images/first_aid_medical_su_8971ac12.jpg";
import firstAid4 from "@/assets/stock_images/first_aid_medical_su_2d28ca02.jpg";
import firstAid5 from "@/assets/stock_images/first_aid_medical_su_ccddb230.jpg";
import personal1 from "@/assets/stock_images/personal_care_hygien_06529c1a.jpg";
import personal2 from "@/assets/stock_images/personal_care_hygien_e2dc7185.jpg";
import personal3 from "@/assets/stock_images/personal_care_hygien_30ad0986.jpg";
import personal4 from "@/assets/stock_images/personal_care_hygien_f7d3c7da.jpg";
import personal5 from "@/assets/stock_images/personal_care_hygien_50005755.jpg";

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
    { id: 3, name: "Omega-3 Fish Oil", price: "$18.99", category: "Vitamins & Supplements", image: vitamin1 },
    { id: 4, name: "Calcium + Vitamin D", price: "$14.99", category: "Vitamins & Supplements", image: vitamin2 },
    { id: 5, name: "Vitamin C 1000mg", price: "$11.99", category: "Vitamins & Supplements", image: vitamin3 },
    { id: 6, name: "B-Complex Vitamins", price: "$13.99", category: "Vitamins & Supplements", image: vitamin4 },
    { id: 7, name: "Magnesium Supplement", price: "$16.99", category: "Vitamins & Supplements", image: vitamin5 },
    { id: 8, name: "Zinc Immune Support", price: "$10.99", category: "Vitamins & Supplements", image: vitamin1 },
    { id: 9, name: "Iron Supplement", price: "$9.49", category: "Vitamins & Supplements", image: vitamin2 },
    { id: 10, name: "Probiotic Daily", price: "$24.99", category: "Vitamins & Supplements", image: vitamin3 },
    { id: 11, name: "Glucosamine Chondroitin", price: "$22.99", category: "Vitamins & Supplements", image: vitamin4 },
    { id: 12, name: "CoQ10 Supplement", price: "$28.99", category: "Vitamins & Supplements", image: vitamin5 },
    { id: 13, name: "Pain Relief Extra Strength", price: "$8.99", category: "Pain Relief", image: painReliefImg },
    { id: 14, name: "Headache Relief", price: "$7.49", category: "Pain Relief", image: headacheReliefImg },
    { id: 15, name: "Muscle Pain Reliever", price: "$11.99", category: "Pain Relief", image: medicine1 },
    { id: 16, name: "Back Pain Relief", price: "$13.49", category: "Pain Relief", image: medicine2 },
    { id: 17, name: "Arthritis Pain Relief", price: "$14.99", category: "Pain Relief", image: medicine3 },
    { id: 18, name: "Migraine Relief", price: "$15.99", category: "Pain Relief", image: medicine4 },
    { id: 19, name: "Joint Pain Relief", price: "$12.99", category: "Pain Relief", image: medicine5 },
    { id: 20, name: "Menstrual Pain Relief", price: "$9.99", category: "Pain Relief", image: medicine1 },
    { id: 21, name: "Allergy Relief 24HR", price: "$15.99", category: "Allergy & Sinus", image: allergyReliefImg },
    { id: 22, name: "Nasal Spray", price: "$11.99", category: "Allergy & Sinus", image: nasalSprayImg },
    { id: 23, name: "Allergy Eye Drops", price: "$9.99", category: "Allergy & Sinus", image: medicine2 },
    { id: 24, name: "Sinus Relief", price: "$12.99", category: "Allergy & Sinus", image: medicine3 },
    { id: 25, name: "Antihistamine Tablets", price: "$13.99", category: "Allergy & Sinus", image: medicine4 },
    { id: 26, name: "Decongestant Spray", price: "$10.99", category: "Allergy & Sinus", image: medicine5 },
    { id: 27, name: "Allergy Relief Children", price: "$11.49", category: "Allergy & Sinus", image: medicine1 },
    { id: 28, name: "Cold & Flu Relief", price: "$13.99", category: "Cold & Flu", image: coldFluImg },
    { id: 29, name: "Cough Syrup", price: "$9.99", category: "Cold & Flu", image: coughSyrupImg },
    { id: 30, name: "Throat Lozenges", price: "$6.99", category: "Cold & Flu", image: medicine2 },
    { id: 31, name: "Flu Relief Capsules", price: "$14.99", category: "Cold & Flu", image: medicine3 },
    { id: 32, name: "Nasal Decongestant", price: "$8.99", category: "Cold & Flu", image: medicine4 },
    { id: 33, name: "Cough Drops Honey", price: "$5.99", category: "Cold & Flu", image: medicine5 },
    { id: 34, name: "Cold Relief Night", price: "$12.99", category: "Cold & Flu", image: medicine1 },
    { id: 35, name: "Fever Reducer", price: "$7.99", category: "Cold & Flu", image: medicine2 },
    { id: 36, name: "Vapor Rub", price: "$8.49", category: "Cold & Flu", image: medicine3 },
    { id: 37, name: "First Aid Kit", price: "$24.99", category: "First Aid", image: firstAidKitImg },
    { id: 38, name: "Bandages Assorted", price: "$5.99", category: "First Aid", image: bandagesImg },
    { id: 39, name: "Antiseptic Spray", price: "$7.99", category: "First Aid", image: firstAid1 },
    { id: 40, name: "Medical Tape", price: "$4.99", category: "First Aid", image: firstAid2 },
    { id: 41, name: "Gauze Pads", price: "$6.49", category: "First Aid", image: firstAid3 },
    { id: 42, name: "Alcohol Wipes", price: "$3.99", category: "First Aid", image: firstAid4 },
    { id: 43, name: "Burn Relief Gel", price: "$8.99", category: "First Aid", image: firstAid5 },
    { id: 44, name: "Hydrogen Peroxide", price: "$4.49", category: "First Aid", image: firstAid1 },
    { id: 45, name: "Elastic Bandage", price: "$7.99", category: "First Aid", image: firstAid2 },
    { id: 46, name: "Digital Thermometer", price: "$12.99", category: "First Aid", image: firstAid3 },
    { id: 47, name: "Ice Pack", price: "$9.99", category: "First Aid", image: firstAid4 },
    { id: 48, name: "Hand Sanitizer", price: "$4.99", category: "Personal Care", image: handSanitizerImg },
    { id: 49, name: "Moisturizing Lotion", price: "$8.99", category: "Personal Care", image: lotionImg },
    { id: 50, name: "Body Wash", price: "$6.99", category: "Personal Care", image: personal1 },
    { id: 51, name: "Sunscreen SPF 50", price: "$12.99", category: "Personal Care", image: personal2 },
    { id: 52, name: "Deodorant", price: "$5.99", category: "Personal Care", image: personal3 },
    { id: 53, name: "Shampoo & Conditioner", price: "$9.99", category: "Personal Care", image: personal4 },
    { id: 54, name: "Toothpaste Whitening", price: "$6.49", category: "Personal Care", image: personal5 },
    { id: 55, name: "Mouthwash", price: "$7.99", category: "Personal Care", image: personal1 },
    { id: 56, name: "Hand Cream", price: "$8.49", category: "Personal Care", image: personal2 },
    { id: 57, name: "Lip Balm SPF", price: "$3.99", category: "Personal Care", image: personal3 },
    { id: 58, name: "Body Lotion Unscented", price: "$9.99", category: "Personal Care", image: personal4 },
    { id: 59, name: "Shower Gel", price: "$7.49", category: "Personal Care", image: personal5 },
    { id: 60, name: "Face Cream", price: "$19.99", category: "Beauty", image: beauty1 },
    { id: 61, name: "Facial Cleanser", price: "$11.99", category: "Beauty", image: beauty2 },
    { id: 62, name: "Anti-Aging Serum", price: "$29.99", category: "Beauty", image: beauty3 },
    { id: 63, name: "Makeup Remover", price: "$8.99", category: "Beauty", image: beauty4 },
    { id: 64, name: "Night Cream", price: "$22.99", category: "Beauty", image: beauty5 },
    { id: 65, name: "Eye Cream", price: "$24.99", category: "Beauty", image: beauty1 },
    { id: 66, name: "Face Mask Sheet", price: "$3.99", category: "Beauty", image: beauty2 },
    { id: 67, name: "Exfoliating Scrub", price: "$13.99", category: "Beauty", image: beauty3 },
    { id: 68, name: "Toner", price: "$14.99", category: "Beauty", image: beauty4 },
    { id: 69, name: "Moisturizer SPF 30", price: "$18.99", category: "Beauty", image: beauty5 },
    { id: 70, name: "Vitamin C Serum", price: "$26.99", category: "Beauty", image: beauty1 },
    { id: 71, name: "Hyaluronic Acid", price: "$21.99", category: "Beauty", image: beauty2 },
    { id: 72, name: "Retinol Cream", price: "$32.99", category: "Beauty", image: beauty3 },
  ];

  const filteredProducts = searchTerm
    ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase()))
    : products;

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
                <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg" data-testid={`card-product-${product.id}`}>
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
                    <h3 className="mb-2 font-semibold" data-testid={`text-name-${product.id}`}>{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary" data-testid={`text-price-${product.id}`}>{product.price}</p>
                      <Button size="sm" data-testid={`button-add-cart-${product.id}`}>Add to Cart</Button>
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
