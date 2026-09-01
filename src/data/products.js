export const products = [
  // ───── Real Inventory: ARCU GLEAM Face Wash ─────
  {
    id: 100,
    name: 'ARCU GLEAM Face Wash 100ml',
    category: 'skin-care',
    price: 850,
    oldPrice: 999,
    rating: 4.8,
    reviews: 320,
    image: 'products/arcu-gleam-card.jpg',
    description: 'Deep clean, oil control & hydration boost face wash for acne-prone skin. Salicylic Acid deep cleanses and unclogs pores, Niacinamide controls oil and improves skin tone, and Hyaluronic Acid hydrates and maintains the skin barrier. For clear, fresh & healthy skin.',
    dosage: 'Use twice daily: wet face, massage a small amount gently over skin, rinse with water. Avoid contact with eyes.',
    stock: true,
    prescription: false,
    badge: 'Real Product'
  },
  // ───── Pain & Fever ─────
  {
    id: 1,
    name: 'Panadol Extra 500mg',
    category: 'pain',
    price: 180,
    oldPrice: 210,
    rating: 4.8,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70&auto=format&fit=crop',
    description: 'Fast-acting relief from headaches, fever and body pain. Each tablet contains Paracetamol 500mg + Caffeine 65mg for enhanced pain relief.',
    dosage: 'Adults: 1–2 tablets every 4–6 hours. Max 8 tablets per 24 hours. Do not exceed 4g paracetamol daily.',
    stock: true,
    prescription: false,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Brufen 400mg',
    category: 'pain',
    price: 120,
    oldPrice: 140,
    rating: 4.6,
    reviews: 860,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70&auto=format&fit=crop',
    description: 'Ibuprofen 400mg — anti-inflammatory pain relief for muscle aches, joint pain and dental pain.',
    dosage: 'Adults: 1 tablet 3 times daily after food. Max 3 tablets per 24 hours.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 3,
    name: 'Disprin 300mg',
    category: 'pain',
    price: 60,
    oldPrice: 75,
    rating: 4.5,
    reviews: 540,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=70&auto=format&fit=crop',
    description: 'Effervescent Aspirin 300mg for headaches, fever and mild pain. Dissolves in water for rapid absorption.',
    dosage: 'Adults: 1–2 tablets dissolved in water every 4–6 hours as needed.',
    stock: true,
    prescription: false,
    badge: null
  },
  {
    id: 4,
    name: 'Ponstan Forte 500mg',
    category: 'pain',
    price: 150,
    oldPrice: 170,
    rating: 4.4,
    reviews: 420,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=70&auto=format&fit=crop',
    description: 'Mefenamic Acid 500mg — effective relief for period pain, dental pain and inflammation.',
    dosage: 'Adults: 1 tablet 3 times daily after food, max 3 days for period pain.',
    stock: true,
    prescription: true,
    badge: null
  },

  // ───── Antibiotics & Anti-infectives ─────
  {
    id: 5,
    name: 'Augmentin 1g',
    category: 'antibiotics',
    price: 480,
    oldPrice: 550,
    rating: 4.7,
    reviews: 730,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=70&auto=format&fit=crop',
    description: 'Co-amoxiclav 1g — broad-spectrum antibiotic for respiratory, urinary and skin infections.',
    dosage: 'Adults: 1 tablet twice daily with food, as prescribed by your doctor. Complete the full course.',
    stock: true,
    prescription: true,
    badge: 'Prescription'
  },
  {
    id: 6,
    name: 'Zithromax 250mg',
    category: 'antibiotics',
    price: 320,
    oldPrice: 360,
    rating: 4.6,
    reviews: 510,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=70&auto=format&fit=crop',
    description: 'Azithromycin 250mg — macrolide antibiotic for chest, ear and throat infections.',
    dosage: 'Adults: 2 tablets on day 1, then 1 tablet daily for 4 days. Doctor prescribed.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 7,
    name: 'Cefixime 400mg',
    category: 'antibiotics',
    price: 290,
    oldPrice: 330,
    rating: 4.5,
    reviews: 380,
    image: 'https://images.unsplash.com/photo-1628354673063-5ce78f1d4d52?w=600&q=70&auto=format&fit=crop',
    description: 'Cephalosporin antibiotic for typhoid, urinary tract and respiratory infections.',
    dosage: 'Adults: 1 tablet daily for 7–10 days as prescribed.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 8,
    name: 'Flagyl 400mg',
    category: 'antibiotics',
    price: 95,
    oldPrice: 110,
    rating: 4.3,
    reviews: 610,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=70&auto=format&fit=crop',
    description: 'Metronidazole 400mg — antiprotozoal & antibacterial for gut and dental infections.',
    dosage: 'Adults: 1 tablet 3 times daily after food, 5–7 days as prescribed.',
    stock: true,
    prescription: true,
    badge: null
  },

  // ───── Vitamins & Supplements ─────
  {
    id: 9,
    name: 'Centrum Multivitamin',
    category: 'vitamins',
    price: 1850,
    oldPrice: 2100,
    rating: 4.9,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70&auto=format&fit=crop',
    description: 'Complete multivitamin with 24 essential vitamins & minerals for daily energy and immunity.',
    dosage: 'Adults: 1 tablet daily with a meal. Do not exceed recommended dose.',
    stock: true,
    prescription: false,
    badge: 'Bestseller'
  },
  {
    id: 10,
    name: 'Calcium + Vitamin D3',
    category: 'vitamins',
    price: 980,
    oldPrice: 1150,
    rating: 4.7,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70&auto=format&fit=crop',
    description: 'Bone health formula with Calcium 600mg + Vitamin D3 400IU for stronger bones and teeth.',
    dosage: 'Adults: 1–2 tablets daily after meals.',
    stock: true,
    prescription: false,
    badge: null
  },
  {
    id: 11,
    name: 'Vitamin C 1000mg',
    category: 'vitamins',
    price: 450,
    oldPrice: 520,
    rating: 4.8,
    reviews: 1560,
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=600&q=70&auto=format&fit=crop',
    description: 'High-strength Vitamin C with zinc for immune support and skin health.',
    dosage: 'Adults: 1 effervescent tablet in water daily.',
    stock: true,
    prescription: false,
    badge: 'Immune Boost'
  },
  {
    id: 12,
    name: 'Omega-3 Fish Oil',
    category: 'vitamins',
    price: 1250,
    oldPrice: 1400,
    rating: 4.6,
    reviews: 720,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=70&auto=format&fit=crop',
    description: 'Pure fish oil with EPA & DHA for heart, brain and joint health.',
    dosage: 'Adults: 1 softgel capsule daily with food.',
    stock: true,
    prescription: false,
    badge: null
  },

  // ───── Diabetes Care ─────
  {
    id: 13,
    name: 'Glucophage 500mg',
    category: 'diabetes',
    price: 210,
    oldPrice: 240,
    rating: 4.7,
    reviews: 940,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=70&auto=format&fit=crop',
    description: 'Metformin 500mg — first-line treatment for Type 2 diabetes, controls blood sugar levels.',
    dosage: 'Adults: 1 tablet 2–3 times daily with meals as prescribed.',
    stock: true,
    prescription: true,
    badge: 'Prescription'
  },
  {
    id: 14,
    name: 'Janumet 50/500',
    category: 'diabetes',
    price: 680,
    oldPrice: 750,
    rating: 4.5,
    reviews: 430,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=70&auto=format&fit=crop',
    description: 'Sitagliptin + Metformin combination for better Type 2 diabetes control.',
    dosage: 'Adults: 1 tablet twice daily with meals as prescribed.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 15,
    name: 'Accu-Chek Active Kit',
    category: 'diabetes',
    price: 2950,
    oldPrice: 3300,
    rating: 4.8,
    reviews: 620,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70&auto=format&fit=crop',
    description: 'Blood glucose monitoring kit with 10 test strips and lancing device.',
    dosage: 'Use as directed. Test before meals and as advised by your physician.',
    stock: true,
    prescription: false,
    badge: 'Device'
  },
  {
    id: 16,
    name: 'DiaSure Test Strips (50)',
    category: 'diabetes',
    price: 1650,
    oldPrice: 1850,
    rating: 4.6,
    reviews: 380,
    image: 'https://images.unsplash.com/photo-1628354673063-5ce78f1d4d52?w=600&q=70&auto=format&fit=crop',
    description: '50 blood glucose test strips compatible with DiaSure meters.',
    dosage: 'Use one strip per test. Store in cool, dry place.',
    stock: true,
    prescription: false,
    badge: null
  },

  // ───── Heart & BP ─────
  {
    id: 17,
    name: 'Concor 5mg',
    category: 'heart',
    price: 240,
    oldPrice: 270,
    rating: 4.7,
    reviews: 580,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70&auto=format&fit=crop',
    description: 'Bisoprolol 5mg — beta-blocker for high blood pressure and heart conditions.',
    dosage: 'Adults: 1 tablet daily in the morning, as prescribed.',
    stock: true,
    prescription: true,
    badge: 'Prescription'
  },
  {
    id: 18,
    name: 'Cozaar 50mg',
    category: 'heart',
    price: 380,
    oldPrice: 430,
    rating: 4.6,
    reviews: 490,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=70&auto=format&fit=crop',
    description: 'Losartan 50mg — ARB for hypertension and heart failure management.',
    dosage: 'Adults: 1 tablet daily as prescribed by your cardiologist.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 19,
    name: 'Aspirin 75mg (Cardio)',
    category: 'heart',
    price: 85,
    oldPrice: 100,
    rating: 4.8,
    reviews: 1120,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=70&auto=format&fit=crop',
    description: 'Low-dose cardio aspirin for blood thinning and heart attack prevention.',
    dosage: 'Adults: 1 tablet daily after food, as prescribed.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 20,
    name: 'Omeprazole 20mg',
    category: 'heart',
    price: 140,
    oldPrice: 160,
    rating: 4.5,
    reviews: 1340,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=70&auto=format&fit=crop',
    description: 'Proton pump inhibitor for acidity, heartburn and gastric reflux protection.',
    dosage: 'Adults: 1 capsule daily before breakfast for 4–8 weeks.',
    stock: true,
    prescription: false,
    badge: null
  },

  // ───── Skin & Allergy ─────
  {
    id: 21,
    name: 'Claritin 10mg',
    category: 'skin',
    price: 260,
    oldPrice: 300,
    rating: 4.7,
    reviews: 980,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70&auto=format&fit=crop',
    description: 'Loratadine 10mg — non-drowsy antihistamine for allergies, hay fever and hives.',
    dosage: 'Adults: 1 tablet daily. Non-drowsy formula.',
    stock: true,
    prescription: false,
    badge: 'Non-Drowsy'
  },
  {
    id: 22,
    name: 'Fucidin Cream 15g',
    category: 'skin',
    price: 420,
    oldPrice: 470,
    rating: 4.6,
    reviews: 640,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70&auto=format&fit=crop',
    description: 'Fusidic acid 2% antibacterial cream for skin infections and minor wounds.',
    dosage: 'Apply thin layer 2–3 times daily on affected area.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 23,
    name: 'Betnovate-N Cream',
    category: 'skin',
    price: 190,
    oldPrice: 220,
    rating: 4.4,
    reviews: 520,
    image: 'https://images.unsplash.com/photo-1628354673063-5ce78f1d4d52?w=600&q=70&auto=format&fit=crop',
    description: 'Betamethasone + Neomycin for eczema, dermatitis and infected skin conditions.',
    dosage: 'Apply sparingly 1–2 times daily. Use for max 7 days.',
    stock: true,
    prescription: true,
    badge: null
  },
  {
    id: 24,
    name: 'Cetirizine 10mg',
    category: 'skin',
    price: 110,
    oldPrice: 130,
    rating: 4.5,
    reviews: 870,
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=600&q=70&auto=format&fit=crop',
    description: 'Antihistamine for allergy relief — sneezing, runny nose and itchy eyes.',
    dosage: 'Adults: 1 tablet daily in the evening.',
    stock: true,
    prescription: false,
    badge: null
  }
]

export const categories = [
  { id: 'all', label: 'All Products', icon: '🧺' },
  { id: 'skin-care', label: 'Skin Care', icon: '✨' },
  { id: 'pain', label: 'Pain & Fever', icon: '💊' },
  { id: 'antibiotics', label: 'Antibiotics', icon: '🦠' },
  { id: 'vitamins', label: 'Vitamins & Supplements', icon: '💪' },
  { id: 'diabetes', label: 'Diabetes Care', icon: '🩸' },
  { id: 'heart', label: 'Heart & BP', icon: '❤️' },
  { id: 'skin', label: 'Skin & Allergy', icon: '🧴' }
]

export const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Karachi',
    avatar: 'https://i.pravatar.cc/100?img=47',
    quote: 'Ordered my mother\'s heart medication at 10pm — it arrived by noon the next day, properly sealed with the prescription verified. Incredible service!',
    rating: 5
  },
  {
    name: 'Bilal Ahmed',
    role: 'Lahore',
    avatar: 'https://i.pravatar.cc/100?img=12',
    quote: 'The pharmacist consultation feature is a lifesaver. I asked about a vitamin interaction and got a professional answer within minutes.',
    rating: 5
  },
  {
    name: 'Fatima Noor',
    role: 'Islamabad',
    avatar: 'https://i.pravatar.cc/100?img=32',
    quote: 'Genuine medicines at fair prices — the loyalty points actually add up. I\'ve been ordering my monthly supplies here for over a year.',
    rating: 4
  },
  {
    name: 'Hamza Sheikh',
    role: 'Rawalpindi',
    avatar: 'https://i.pravatar.cc/100?img=68',
    quote: 'Fast delivery, cold-chain insulin delivered on ice, and the app shows the whole order history. This is how pharmacies should work.',
    rating: 5
  }
]

export const services = [
  {
    icon: '💊',
    title: 'Prescription Refills',
    desc: 'Upload your prescription once and we\'ll handle automatic refills with pharmacist verification before every dispatch.'
  },
  {
    icon: '🚚',
    title: 'Express Delivery',
    desc: 'Same-day delivery across major cities in 2–4 hours. Cold-chain packaging for temperature-sensitive medicines.'
  },
  {
    icon: '🧪',
    title: 'Health Consultations',
    desc: 'Chat with licensed pharmacists 24/7 for medication advice, dosage guidance and health queries — free with every order.'
  },
  {
    icon: '🔔',
    title: 'Medication Reminders',
    desc: 'Smart reminders for every dose via SMS and WhatsApp so you never miss a medication, especially for chronic care.'
  },
  {
    icon: '🧾',
    title: 'Insurance & Billing',
    desc: 'Direct billing with major health insurers and corporates. Digital invoices for every purchase, always.'
  },
  {
    icon: '📊',
    title: 'Health Records',
    desc: 'Secure digital vault of your prescriptions, allergies and purchase history — accessible anytime, private always.'
  }
]