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

const allProducts = [
  { id: 1, name: "Daily Multivitamin", price: "$12.99", category: "vitamins-supplements", image: multivitaminImg },
  { id: 2, name: "Vitamin D3", price: "$9.99", category: "vitamins-supplements", image: vitaminD3Img },
  { id: 3, name: "Omega-3 Fish Oil", price: "$18.99", category: "vitamins-supplements", image: vitamin1 },
  { id: 4, name: "Calcium + Vitamin D", price: "$14.99", category: "vitamins-supplements", image: vitamin2 },
  { id: 5, name: "Vitamin C 1000mg", price: "$11.99", category: "vitamins-supplements", image: vitamin3 },
  { id: 6, name: "B-Complex Vitamins", price: "$13.99", category: "vitamins-supplements", image: vitamin4 },
  { id: 7, name: "Magnesium Supplement", price: "$16.99", category: "vitamins-supplements", image: vitamin5 },
  { id: 8, name: "Zinc Immune Support", price: "$10.99", category: "vitamins-supplements", image: vitamin1 },
  { id: 9, name: "Iron Supplement", price: "$9.49", category: "vitamins-supplements", image: vitamin2 },
  { id: 10, name: "Probiotic Daily", price: "$24.99", category: "vitamins-supplements", image: vitamin3 },
  { id: 11, name: "Glucosamine Chondroitin", price: "$22.99", category: "vitamins-supplements", image: vitamin4 },
  { id: 12, name: "CoQ10 Supplement", price: "$28.99", category: "vitamins-supplements", image: vitamin5 },
  { id: 13, name: "Biotin Hair Growth", price: "$17.99", category: "vitamins-supplements", image: vitamin1 },
  { id: 14, name: "Turmeric Curcumin", price: "$19.99", category: "vitamins-supplements", image: vitamin2 },
  { id: 15, name: "Collagen Peptides", price: "$32.99", category: "vitamins-supplements", image: vitamin3 },
  { id: 16, name: "Pain Relief Extra Strength", price: "$8.99", category: "pain-relief", image: painReliefImg },
  { id: 17, name: "Headache Relief", price: "$7.49", category: "pain-relief", image: headacheReliefImg },
  { id: 18, name: "Muscle Pain Reliever", price: "$11.99", category: "pain-relief", image: medicine1 },
  { id: 19, name: "Back Pain Relief", price: "$13.49", category: "pain-relief", image: medicine2 },
  { id: 20, name: "Arthritis Pain Relief", price: "$14.99", category: "pain-relief", image: medicine3 },
  { id: 21, name: "Migraine Relief", price: "$15.99", category: "pain-relief", image: medicine4 },
  { id: 22, name: "Joint Pain Relief", price: "$12.99", category: "pain-relief", image: medicine5 },
  { id: 23, name: "Menstrual Pain Relief", price: "$9.99", category: "pain-relief", image: medicine1 },
  { id: 24, name: "Toothache Relief", price: "$6.99", category: "pain-relief", image: medicine2 },
  { id: 25, name: "Nerve Pain Relief", price: "$16.99", category: "pain-relief", image: medicine3 },
  { id: 26, name: "Allergy Relief 24HR", price: "$15.99", category: "allergy-sinus", image: allergyReliefImg },
  { id: 27, name: "Nasal Spray", price: "$11.99", category: "allergy-sinus", image: nasalSprayImg },
  { id: 28, name: "Allergy Eye Drops", price: "$9.99", category: "allergy-sinus", image: medicine2 },
  { id: 29, name: "Sinus Relief", price: "$12.99", category: "allergy-sinus", image: medicine3 },
  { id: 30, name: "Antihistamine Tablets", price: "$13.99", category: "allergy-sinus", image: medicine4 },
  { id: 31, name: "Decongestant Spray", price: "$10.99", category: "allergy-sinus", image: medicine5 },
  { id: 32, name: "Allergy Relief Children", price: "$11.49", category: "allergy-sinus", image: medicine1 },
  { id: 33, name: "Sinus Pressure Relief", price: "$14.49", category: "allergy-sinus", image: medicine2 },
  { id: 34, name: "Seasonal Allergy Relief", price: "$13.49", category: "allergy-sinus", image: medicine3 },
  { id: 35, name: "Cold & Flu Relief", price: "$13.99", category: "cold-flu", image: coldFluImg },
  { id: 36, name: "Cough Syrup", price: "$9.99", category: "cold-flu", image: coughSyrupImg },
  { id: 37, name: "Throat Lozenges", price: "$6.99", category: "cold-flu", image: medicine2 },
  { id: 38, name: "Flu Relief Capsules", price: "$14.99", category: "cold-flu", image: medicine3 },
  { id: 39, name: "Nasal Decongestant", price: "$8.99", category: "cold-flu", image: medicine4 },
  { id: 40, name: "Cough Drops Honey", price: "$5.99", category: "cold-flu", image: medicine5 },
  { id: 41, name: "Cold Relief Night", price: "$12.99", category: "cold-flu", image: medicine1 },
  { id: 42, name: "Fever Reducer", price: "$7.99", category: "cold-flu", image: medicine2 },
  { id: 43, name: "Vapor Rub", price: "$8.49", category: "cold-flu", image: medicine3 },
  { id: 44, name: "Chest Congestion Relief", price: "$11.49", category: "cold-flu", image: medicine4 },
  { id: 45, name: "Expectorant Syrup", price: "$10.99", category: "cold-flu", image: medicine5 },
  { id: 46, name: "First Aid Kit", price: "$24.99", category: "first-aid", image: firstAidKitImg },
  { id: 47, name: "Bandages Assorted", price: "$5.99", category: "first-aid", image: bandagesImg },
  { id: 48, name: "Antiseptic Spray", price: "$7.99", category: "first-aid", image: firstAid1 },
  { id: 49, name: "Medical Tape", price: "$4.99", category: "first-aid", image: firstAid2 },
  { id: 50, name: "Gauze Pads", price: "$6.49", category: "first-aid", image: firstAid3 },
  { id: 51, name: "Alcohol Wipes", price: "$3.99", category: "first-aid", image: firstAid4 },
  { id: 52, name: "Burn Relief Gel", price: "$8.99", category: "first-aid", image: firstAid5 },
  { id: 53, name: "Hydrogen Peroxide", price: "$4.49", category: "first-aid", image: firstAid1 },
  { id: 54, name: "Elastic Bandage", price: "$7.99", category: "first-aid", image: firstAid2 },
  { id: 55, name: "Digital Thermometer", price: "$12.99", category: "first-aid", image: firstAid3 },
  { id: 56, name: "Ice Pack", price: "$9.99", category: "first-aid", image: firstAid4 },
  { id: 57, name: "Adhesive Tape", price: "$3.49", category: "first-aid", image: firstAid5 },
  { id: 58, name: "Cotton Balls", price: "$2.99", category: "first-aid", image: firstAid1 },
  { id: 59, name: "Instant Cold Pack", price: "$5.49", category: "first-aid", image: firstAid2 },
  { id: 60, name: "Hand Sanitizer", price: "$4.99", category: "personal-care", image: handSanitizerImg },
  { id: 61, name: "Moisturizing Lotion", price: "$8.99", category: "personal-care", image: lotionImg },
  { id: 62, name: "Body Wash", price: "$6.99", category: "personal-care", image: personal1 },
  { id: 63, name: "Sunscreen SPF 50", price: "$12.99", category: "personal-care", image: personal2 },
  { id: 64, name: "Deodorant", price: "$5.99", category: "personal-care", image: personal3 },
  { id: 65, name: "Shampoo & Conditioner", price: "$9.99", category: "personal-care", image: personal4 },
  { id: 66, name: "Toothpaste Whitening", price: "$6.49", category: "personal-care", image: personal5 },
  { id: 67, name: "Mouthwash", price: "$7.99", category: "personal-care", image: personal1 },
  { id: 68, name: "Hand Cream", price: "$8.49", category: "personal-care", image: personal2 },
  { id: 69, name: "Lip Balm SPF", price: "$3.99", category: "personal-care", image: personal3 },
  { id: 70, name: "Body Lotion Unscented", price: "$9.99", category: "personal-care", image: personal4 },
  { id: 71, name: "Shower Gel", price: "$7.49", category: "personal-care", image: personal5 },
  { id: 72, name: "Hair Conditioner", price: "$8.99", category: "personal-care", image: personal1 },
  { id: 73, name: "Foot Cream", price: "$9.49", category: "personal-care", image: personal2 },
  { id: 74, name: "Bar Soap Pack", price: "$5.99", category: "personal-care", image: personal3 },
  { id: 75, name: "Face Cream", price: "$19.99", category: "beauty", image: beauty1 },
  { id: 76, name: "Facial Cleanser", price: "$11.99", category: "beauty", image: beauty2 },
  { id: 77, name: "Anti-Aging Serum", price: "$29.99", category: "beauty", image: beauty3 },
  { id: 78, name: "Makeup Remover", price: "$8.99", category: "beauty", image: beauty4 },
  { id: 79, name: "Night Cream", price: "$22.99", category: "beauty", image: beauty5 },
  { id: 80, name: "Eye Cream", price: "$24.99", category: "beauty", image: beauty1 },
  { id: 81, name: "Face Mask Sheet", price: "$3.99", category: "beauty", image: beauty2 },
  { id: 82, name: "Exfoliating Scrub", price: "$13.99", category: "beauty", image: beauty3 },
  { id: 83, name: "Toner", price: "$14.99", category: "beauty", image: beauty4 },
  { id: 84, name: "Moisturizer SPF 30", price: "$18.99", category: "beauty", image: beauty5 },
  { id: 85, name: "Vitamin C Serum", price: "$26.99", category: "beauty", image: beauty1 },
  { id: 86, name: "Hyaluronic Acid", price: "$21.99", category: "beauty", image: beauty2 },
  { id: 87, name: "Retinol Cream", price: "$32.99", category: "beauty", image: beauty3 },
  { id: 88, name: "Micellar Water", price: "$12.49", category: "beauty", image: beauty4 },
  { id: 89, name: "Clay Mask", price: "$16.99", category: "beauty", image: beauty5 },
  { id: 90, name: "BB Cream", price: "$15.99", category: "beauty", image: beauty1 },
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
                <h3 className="mb-2 font-semibold" data-testid={`text-name-${product.id}`}>{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-primary" data-testid={`text-price-${product.id}`}>{product.price}</p>
                  <Button size="sm" data-testid={`button-add-cart-${product.id}`}>Add to Cart</Button>
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
