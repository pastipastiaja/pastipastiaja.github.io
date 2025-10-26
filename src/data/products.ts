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

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
}

export const allProducts: Product[] = [
  { id: 1, name: "Daily Multivitamin", price: "$12.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: multivitaminImg, description: "Complete daily multivitamin with essential vitamins and minerals to support overall health and wellness. Contains vitamins A, C, D, E, and B-complex." },
  { id: 2, name: "Vitamin D3", price: "$9.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitaminD3Img, description: "High-potency Vitamin D3 supplement for bone health, immune support, and mood enhancement. 2000 IU per softgel." },
  { id: 3, name: "Omega-3 Fish Oil", price: "$18.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin1, description: "Premium omega-3 fish oil with EPA and DHA for heart, brain, and joint health. Molecularly distilled for purity." },
  { id: 4, name: "Calcium + Vitamin D", price: "$14.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin2, description: "Calcium with Vitamin D3 for strong bones and teeth. Helps prevent osteoporosis and supports muscle function." },
  { id: 5, name: "Vitamin C 1000mg", price: "$11.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin3, description: "High-dose Vitamin C for immune system support and antioxidant protection. Time-release formula for sustained absorption." },
  { id: 6, name: "B-Complex Vitamins", price: "$13.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin4, description: "Complete B-vitamin complex for energy metabolism, nervous system health, and red blood cell formation." },
  { id: 7, name: "Magnesium Supplement", price: "$16.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin5, description: "Highly absorbable magnesium for muscle relaxation, heart health, and stress relief. 400mg per serving." },
  { id: 8, name: "Zinc Immune Support", price: "$10.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin1, description: "Zinc supplement to boost immune function, support wound healing, and maintain healthy skin. 50mg per tablet." },
  { id: 9, name: "Iron Supplement", price: "$9.49", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin2, description: "Gentle iron supplement for energy and healthy red blood cells. Easy on the stomach with Vitamin C for better absorption." },
  { id: 10, name: "Probiotic Daily", price: "$24.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin3, description: "Multi-strain probiotic with 10 billion CFUs for digestive health and immune support. Shelf-stable formula." },
  { id: 11, name: "Glucosamine Chondroitin", price: "$22.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin4, description: "Joint support formula with glucosamine and chondroitin for cartilage health and mobility. Triple strength." },
  { id: 12, name: "CoQ10 Supplement", price: "$28.99", category: "Vitamins & Supplements", categorySlug: "vitamins-supplements", image: vitamin5, description: "Coenzyme Q10 for heart health, cellular energy, and antioxidant support. 200mg high-potency formula." },
  { id: 13, name: "Pain Relief Extra Strength", price: "$8.99", category: "Pain Relief", categorySlug: "pain-relief", image: painReliefImg, description: "Fast-acting extra strength pain reliever for headaches, muscle aches, and minor arthritis pain. 500mg caplets." },
  { id: 14, name: "Headache Relief", price: "$7.49", category: "Pain Relief", categorySlug: "pain-relief", image: headacheReliefImg, description: "Targeted headache and migraine relief formula. Works fast to relieve tension and sinus headaches." },
  { id: 15, name: "Muscle Pain Reliever", price: "$11.99", category: "Pain Relief", categorySlug: "pain-relief", image: medicine1, description: "Topical cream for muscle pain, strains, and sprains. Deep-penetrating formula with menthol for cooling relief." },
  { id: 16, name: "Back Pain Relief", price: "$13.49", category: "Pain Relief", categorySlug: "pain-relief", image: medicine2, description: "Targeted back pain relief with anti-inflammatory action. Extended release for all-day comfort." },
  { id: 17, name: "Arthritis Pain Relief", price: "$14.99", category: "Pain Relief", categorySlug: "pain-relief", image: medicine3, description: "Joint and arthritis pain relief formula. Reduces inflammation and improves mobility." },
  { id: 18, name: "Migraine Relief", price: "$15.99", category: "Pain Relief", categorySlug: "pain-relief", image: medicine4, description: "Specialized migraine relief formula with caffeine. Provides fast relief from severe headache pain." },
  { id: 19, name: "Joint Pain Relief", price: "$12.99", category: "Pain Relief", categorySlug: "pain-relief", image: medicine5, description: "Natural joint pain relief with glucosamine and MSM. Supports joint flexibility and comfort." },
  { id: 20, name: "Menstrual Pain Relief", price: "$9.99", category: "Pain Relief", categorySlug: "pain-relief", image: medicine1, description: "Multi-symptom menstrual pain relief for cramps, bloating, and discomfort. Gentle on the stomach." },
  { id: 21, name: "Allergy Relief 24HR", price: "$15.99", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: allergyReliefImg, description: "24-hour allergy relief for sneezing, runny nose, and itchy eyes. Non-drowsy formula." },
  { id: 22, name: "Nasal Spray", price: "$11.99", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: nasalSprayImg, description: "Fast-acting nasal decongestant spray for sinus pressure and congestion relief. Works within minutes." },
  { id: 23, name: "Allergy Eye Drops", price: "$9.99", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: medicine2, description: "Soothing eye drops for allergy-related itchy, red, watery eyes. Provides up to 12 hours of relief." },
  { id: 24, name: "Sinus Relief", price: "$12.99", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: medicine3, description: "Multi-symptom sinus relief for pressure, congestion, and headache. Day and night formulas included." },
  { id: 25, name: "Antihistamine Tablets", price: "$13.99", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: medicine4, description: "Fast-acting antihistamine for seasonal allergies. Relieves sneezing, itching, and runny nose." },
  { id: 26, name: "Decongestant Spray", price: "$10.99", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: medicine5, description: "Maximum strength nasal decongestant spray. Clears nasal passages for easier breathing." },
  { id: 27, name: "Allergy Relief Children", price: "$11.49", category: "Allergy & Sinus", categorySlug: "allergy-sinus", image: medicine1, description: "Gentle allergy relief formula designed for children ages 2-12. Grape flavored liquid." },
  { id: 28, name: "Cold & Flu Relief", price: "$13.99", category: "Cold & Flu", categorySlug: "cold-flu", image: coldFluImg, description: "Multi-symptom cold and flu relief for fever, aches, congestion, and cough. Day and night packets." },
  { id: 29, name: "Cough Syrup", price: "$9.99", category: "Cold & Flu", categorySlug: "cold-flu", image: coughSyrupImg, description: "Maximum strength cough suppressant and expectorant. Relieves cough and chest congestion." },
  { id: 30, name: "Throat Lozenges", price: "$6.99", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine2, description: "Soothing throat lozenges with menthol and honey. Relieves sore throat and cough." },
  { id: 31, name: "Flu Relief Capsules", price: "$14.99", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine3, description: "Comprehensive flu symptom relief. Reduces fever, body aches, and congestion." },
  { id: 32, name: "Nasal Decongestant", price: "$8.99", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine4, description: "Oral decongestant tablets for sinus and nasal congestion. Non-drowsy formula." },
  { id: 33, name: "Cough Drops Honey", price: "$5.99", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine5, description: "Natural honey-flavored cough drops. Soothes throat irritation and suppresses cough." },
  { id: 34, name: "Cold Relief Night", price: "$12.99", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine1, description: "Nighttime cold relief formula. Helps you rest while relieving cold symptoms." },
  { id: 35, name: "Fever Reducer", price: "$7.99", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine2, description: "Fast-acting fever reducer and pain reliever. Works for ages 6 and up." },
  { id: 36, name: "Vapor Rub", price: "$8.49", category: "Cold & Flu", categorySlug: "cold-flu", image: medicine3, description: "Medicated vapor rub for chest and throat. Provides soothing relief from cough and congestion." },
  { id: 37, name: "First Aid Kit", price: "$24.99", category: "First Aid", categorySlug: "first-aid", image: firstAidKitImg, description: "Comprehensive 100-piece first aid kit for home, car, or travel. Includes bandages, gauze, ointments, and tools." },
  { id: 38, name: "Bandages Assorted", price: "$5.99", category: "First Aid", categorySlug: "first-aid", image: bandagesImg, description: "Assorted adhesive bandages in multiple sizes. Sterile and flexible for minor cuts and scrapes." },
  { id: 39, name: "Antiseptic Spray", price: "$7.99", category: "First Aid", categorySlug: "first-aid", image: firstAid1, description: "Antibacterial antiseptic spray for wound cleaning. Helps prevent infection and promotes healing." },
  { id: 40, name: "Medical Tape", price: "$4.99", category: "First Aid", categorySlug: "first-aid", image: firstAid2, description: "Medical-grade adhesive tape for securing bandages and dressings. Gentle on skin, strong hold." },
  { id: 41, name: "Gauze Pads", price: "$6.49", category: "First Aid", categorySlug: "first-aid", image: firstAid3, description: "Sterile gauze pads for wound care and dressing. Highly absorbent, various sizes included." },
  { id: 42, name: "Alcohol Wipes", price: "$3.99", category: "First Aid", categorySlug: "first-aid", image: firstAid4, description: "Individually wrapped alcohol prep pads. Perfect for cleaning skin before injections or minor procedures." },
  { id: 43, name: "Burn Relief Gel", price: "$8.99", category: "First Aid", categorySlug: "first-aid", image: firstAid5, description: "Cooling burn relief gel with aloe vera. Soothes minor burns, sunburn, and skin irritation." },
  { id: 44, name: "Hydrogen Peroxide", price: "$4.49", category: "First Aid", categorySlug: "first-aid", image: firstAid1, description: "3% hydrogen peroxide solution for wound cleaning and disinfection. Essential first aid supply." },
  { id: 45, name: "Elastic Bandage", price: "$7.99", category: "First Aid", categorySlug: "first-aid", image: firstAid2, description: "Elastic compression bandage for sprains and strains. Provides support and reduces swelling." },
  { id: 46, name: "Digital Thermometer", price: "$12.99", category: "First Aid", categorySlug: "first-aid", image: firstAid3, description: "Fast and accurate digital thermometer. Oral, rectal, or underarm use with memory recall." },
  { id: 47, name: "Ice Pack", price: "$9.99", category: "First Aid", categorySlug: "first-aid", image: firstAid4, description: "Reusable instant cold pack for injuries and pain relief. No refrigeration needed." },
  { id: 48, name: "Hand Sanitizer", price: "$4.99", category: "Personal Care", categorySlug: "personal-care", image: handSanitizerImg, description: "70% alcohol hand sanitizer gel. Kills 99.9% of germs without water. Moisturizing formula with aloe." },
  { id: 49, name: "Moisturizing Lotion", price: "$8.99", category: "Personal Care", categorySlug: "personal-care", image: lotionImg, description: "Deep moisturizing body lotion for dry skin. Non-greasy formula with shea butter and vitamin E." },
  { id: 50, name: "Body Wash", price: "$6.99", category: "Personal Care", categorySlug: "personal-care", image: personal1, description: "Gentle cleansing body wash with natural ingredients. Leaves skin soft and refreshed." },
  { id: 51, name: "Sunscreen SPF 50", price: "$12.99", category: "Personal Care", categorySlug: "personal-care", image: personal2, description: "Broad spectrum SPF 50 sunscreen. Water-resistant protection against UVA and UVB rays." },
  { id: 52, name: "Deodorant", price: "$5.99", category: "Personal Care", categorySlug: "personal-care", image: personal3, description: "24-hour odor and wetness protection. Aluminum-free formula with natural ingredients." },
  { id: 53, name: "Shampoo & Conditioner", price: "$9.99", category: "Personal Care", categorySlug: "personal-care", image: personal4, description: "Sulfate-free shampoo and conditioner set. Strengthens and nourishes all hair types." },
  { id: 54, name: "Toothpaste Whitening", price: "$6.49", category: "Personal Care", categorySlug: "personal-care", image: personal5, description: "Whitening toothpaste with fluoride. Removes stains while protecting against cavities." },
  { id: 55, name: "Mouthwash", price: "$7.99", category: "Personal Care", categorySlug: "personal-care", image: personal1, description: "Antiseptic mouthwash for fresh breath and healthy gums. Kills bacteria and prevents plaque." },
  { id: 56, name: "Hand Cream", price: "$8.49", category: "Personal Care", categorySlug: "personal-care", image: personal2, description: "Intensive hand cream for dry, cracked hands. Fast-absorbing with shea butter." },
  { id: 57, name: "Lip Balm SPF", price: "$3.99", category: "Personal Care", categorySlug: "personal-care", image: personal3, description: "Moisturizing lip balm with SPF 15. Protects and heals dry, chapped lips." },
  { id: 58, name: "Body Lotion Unscented", price: "$9.99", category: "Personal Care", categorySlug: "personal-care", image: personal4, description: "Fragrance-free body lotion for sensitive skin. Hypoallergenic and dermatologist-tested." },
  { id: 59, name: "Shower Gel", price: "$7.49", category: "Personal Care", categorySlug: "personal-care", image: personal5, description: "Refreshing shower gel with essential oils. Creates rich lather for clean, soft skin." },
  { id: 60, name: "Face Cream", price: "$19.99", category: "Beauty", categorySlug: "beauty", image: beauty1, description: "Anti-aging face cream with retinol and peptides. Reduces fine lines and improves skin texture." },
  { id: 61, name: "Facial Cleanser", price: "$11.99", category: "Beauty", categorySlug: "beauty", image: beauty2, description: "Gentle foaming facial cleanser. Removes makeup and impurities without stripping skin." },
  { id: 62, name: "Anti-Aging Serum", price: "$29.99", category: "Beauty", categorySlug: "beauty", image: beauty3, description: "Premium anti-aging serum with hyaluronic acid and vitamin C. Firms and brightens skin." },
  { id: 63, name: "Makeup Remover", price: "$8.99", category: "Beauty", categorySlug: "beauty", image: beauty4, description: "Oil-free makeup remover for all skin types. Gently removes even waterproof makeup." },
  { id: 64, name: "Night Cream", price: "$22.99", category: "Beauty", categorySlug: "beauty", image: beauty5, description: "Rich night cream for intensive overnight repair. Wakes up to softer, smoother skin." },
  { id: 65, name: "Eye Cream", price: "$24.99", category: "Beauty", categorySlug: "beauty", image: beauty1, description: "Targeted eye cream for dark circles and puffiness. Reduces fine lines around eyes." },
  { id: 66, name: "Face Mask Sheet", price: "$3.99", category: "Beauty", categorySlug: "beauty", image: beauty2, description: "Hydrating sheet mask with natural extracts. Instant moisture and glow boost." },
  { id: 67, name: "Exfoliating Scrub", price: "$13.99", category: "Beauty", categorySlug: "beauty", image: beauty3, description: "Gentle facial scrub with natural exfoliants. Reveals smoother, brighter skin." },
  { id: 68, name: "Toner", price: "$14.99", category: "Beauty", categorySlug: "beauty", image: beauty4, description: "Balancing facial toner with witch hazel. Minimizes pores and refreshes skin." },
  { id: 69, name: "Moisturizer SPF 30", price: "$18.99", category: "Beauty", categorySlug: "beauty", image: beauty5, description: "Daily moisturizer with broad-spectrum SPF 30. Hydrates while protecting from sun damage." },
  { id: 70, name: "Vitamin C Serum", price: "$26.99", category: "Beauty", categorySlug: "beauty", image: beauty1, description: "Brightening vitamin C serum. Evens skin tone and boosts collagen production." },
  { id: 71, name: "Hyaluronic Acid", price: "$21.99", category: "Beauty", categorySlug: "beauty", image: beauty2, description: "Pure hyaluronic acid serum for intense hydration. Plumps and smooths fine lines." },
  { id: 72, name: "Retinol Cream", price: "$32.99", category: "Beauty", categorySlug: "beauty", image: beauty3, description: "Advanced retinol cream for visible anti-aging results. Improves skin tone and texture." },
];

export function getProductById(id: number): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter(product => product.categorySlug === categorySlug);
}
