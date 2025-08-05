export const products = {
  // CTA Section Products
  'hand-sanitizer': {
    id: 'hand-sanitizer',
    name: 'Hand Sanitizer Collection',
    price: 12.99,
    originalPrice: 15.99,
    image: '/home/cta-1.png',
    category: 'Sanitizer'
  },
  
  // Latest Health Products
  'microscope': {
    id: 'microscope',
    name: 'Microscope',
    price: 45.00,
    originalPrice: null,
    image: '/home/microscope.png',
    category: 'Medical Equipment'
  },
  'pulse-oximeter': {
    id: 'pulse-oximeter',
    name: 'Pulse Oximeter',
    price: 19.00,
    originalPrice: 25.00,
    image: '/home/oximeter.png',
    category: 'Medical Equipment'
  },
  'vitamin-serum': {
    id: 'vitamin-serum',
    name: 'Vitamin Serum',
    price: 20.00,
    originalPrice: 30.00,
    image: '/home/serum.png',
    category: 'Supplements'
  },
  'high-protein': {
    id: 'high-protein',
    name: 'High Protein',
    price: 50.00,
    originalPrice: null,
    image: '/home/protein.png',
    category: 'Supplements'
  },
  
  // Store Collection Products
  'b12-medicine': {
    id: 'b12-medicine',
    name: 'B12 Medicine',
    price: 19.00,
    originalPrice: 25.00,
    image: '/home/storecollection-1.png',
    category: 'Medicine'
  },
  'vitamin-d3': {
    id: 'vitamin-d3',
    name: 'Vitamin D3',
    price: 24.99,
    originalPrice: 29.99,
    image: '/home/storecollection-2.png',
    category: 'Supplements'
  },
  'calcium-tablets': {
    id: 'calcium-tablets',
    name: 'Calcium Tablets',
    price: 18.50,
    originalPrice: null,
    image: '/home/storecollection-3.png',
    category: 'Supplements'
  },
  'multivitamin': {
    id: 'multivitamin',
    name: 'Multivitamin Complex',
    price: 32.00,
    originalPrice: 39.99,
    image: '/home/storecollection-4.png',
    category: 'Supplements'
  },
  'omega-3': {
    id: 'omega-3',
    name: 'Omega-3 Fish Oil',
    price: 28.99,
    originalPrice: null,
    image: '/home/storecollection-5.png',
    category: 'Supplements'
  },
  'iron-supplement': {
    id: 'iron-supplement',
    name: 'Iron Supplement',
    price: 16.75,
    originalPrice: 22.00,
    image: '/home/storecollection-6.png',
    category: 'Supplements'
  },
  'probiotics': {
    id: 'probiotics',
    name: 'Probiotic Capsules',
    price: 35.50,
    originalPrice: null,
    image: '/home/storecollection-7.png',
    category: 'Supplements'
  },
  'magnesium': {
    id: 'magnesium',
    name: 'Magnesium Complex',
    price: 21.99,
    originalPrice: 27.99,
    image: '/home/storecollection-8.png',
    category: 'Supplements'
  }
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products[id] || null;
};

// Helper function to get all products
export const getAllProducts = () => {
  return Object.values(products);
};