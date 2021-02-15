import { Post } from '../redux/post/postTypes';
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

export const seedPosts: Post[] = [
  {
    title: "IPad",
    post_id: 1,
    price: "100",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?IPad',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }

  },
  {
    title: "Hoodie",
    post_id: 2,
    price: "20",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?hoodie',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
    
  },
  {
    title: "Laptop",
    post_id: 3,
    price: "500",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?macbook',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
  },
  {
    title: "Kitchen",
    post_id: 4,
    price: "100",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?kitchen',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
  },
  {
    title: "Desk",
    post_id: 5,
    price: "150",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?desk',
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
  },
  {
    title: "Bulb",
    post_id: 6,
    price: "10",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?bulb',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
  },
  {
    title: "Sneakers",
    post_id: 7,
    price: "80",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "great computer",
    image_url: 'https://source.unsplash.com/800x600/?sneakers',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
  },
  {
    title: "Hat",
    post_id: 8,
    price: "10",
    city: "Boston",
    state: 'MA',
    category_id: 1,
    subcategory_id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url: 'https://source.unsplash.com/800x600/?hat',
    user_id: 4,
    user: {
      name: "Alicia D. Macomber",
      email: "AliciaDMacomber@rhyta.com",
      password: "mypassword",
      city: "Haddonfield",
      state: "NJ",
      zip: "08033",
    }
  },
];

export interface Subcategory {
  name: string,
  id: number,
  posts: Post[],
};
export interface Category {
  name: string,
  id: number,
  imageURL: string,
  subCategories: Subcategory[]
};

export const seedCategories: Category[] = [
  {
    name: "Goods",
    id: 1,
    imageURL: 'https://images.unsplash.com/photo-1548082644-d30472ade6be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3RoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    subCategories: [
      { name: "Electronics", id: 1, posts: seedPosts },
      { name: "Cars", id: 2, posts: seedPosts },
      { name: "Furniture", id: 3, posts: seedPosts },
      { name: "Office", id: 4, posts: seedPosts },
      { name: "Appliances", id: 5, posts: seedPosts },
      { name: "Clothing", id: 6, posts: seedPosts },
    ],
  },
  {
    name: "Housing",
    id: 2,
    imageURL: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    subCategories: [
      { name: "For Rent", id: 7, posts: [] },
      { name: "For Sale", id: 8, posts: [] },
      { name: "Sublease", id: 9, posts: [] },
    ],
  },
  {
    name: "Jobs",
    id: 3,
    imageURL: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    subCategories: [
      { name: "Food and Bev", id: 10, posts: [] },
      { name: "Tech", id: 11, posts: [] },
      { name: "Education", id: 12, posts: [] },
      { name: "Finance", id: 13, posts: [] },
      { name: "General Labor", id: 14, posts: [] },
    ],
  },
];
