export interface User {
  name: string;
  email: string;
  password: string;
  city: string;
  state: string;
  zip: string;
}

export const seedUsers: User[] = [
  {
    name: "Alicia D. Macomber",
    email: "AliciaDMacomber@rhyta.com",
    password: "mypassword",
    city: "Haddonfield",
    state: "NJ",
    zip: "08033",
  },
  {
    name: "David M. Motley",
    email: "DavidMMotley@teleworm.us",
    password: "mypassword",
    city: "Los Angeles",
    state: "CA",
    zip: "90071",
  },
];

export interface Post {
  name: string,
  id: string,
  price: string,
  location: string,
  category: string,
  subCategory: string,
  description: string,
  imageUrl: string,
  
}

export const seedPosts: Post[] = [
  {
    name: "Something",
    id: "1",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?barrel'
  },
  {
    name: "Hoodie",
    id: "2",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?hoodie'
  },
  {
    name: "Laptop",
    id: "3",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?macbook'
  },
  {
    name: "Kitchen",
    id: "4",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?kitchen'
  },
  {
    name: "Desk",
    id: "5",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?desk'
  },
  {
    name: "Bulb",
    id: "6",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?bulb'
  },
  {
    name: "Bulb",
    id: "6",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?bulb'
  },
  {
    name: "Bulb",
    id: "6",
    price: "100",
    location: "Boston, MA",
    category: "Goods",
    subCategory: "Electronics",
    description: "great computer",
    imageUrl: 'https://source.unsplash.com/800x600/?bulb'
  },
];

export interface Subcategory {
  name: string,
  id: string,
  posts: Post[],
};
export interface Category {
  name: string,
  id: string,
  imageURL: string,
  subCategories: Subcategory[]
};

export const seedCategories: Category[] = [
  {
    name: "Goods",
    id: "1",
    imageURL: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=654&q=80',
    subCategories: [
      { name: "Electronics", id: "1", posts: seedPosts },
      { name: "Cars", id: "2", posts: seedPosts },
      { name: "Garden", id: "3", posts: seedPosts },
      { name: "Home", id: "4", posts: seedPosts },
    ],
  },
  {
    name: "Housing",
    id: "2",
    imageURL: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    subCategories: [
      { name: "For Rent", id: "1", posts: [] },
      { name: "For Sale", id: "2", posts: [] },
      { name: "Sublease", id: "3", posts: [] },
    ],
  },
  {
    name: "Jobs",
    id: "3",
    imageURL: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    subCategories: [
      { name: "Food and Bev", id: "1", posts: [] },
      { name: "Tech", id: "2", posts: [] },
      { name: "Education", id: "3", posts: [] },
      { name: "Finance", id: "4", posts: [] },
      { name: "General Labor", id: "5", posts: [] },
    ],
  },
];
