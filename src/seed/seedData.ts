export interface Category {
    name: string,
    id: string,
    subCategories: {
      name: string,
      id: string
    }[],
};

export const seedCategories:Category[]= [
  {name: 'Goods', id: '1', subCategories: [{name: 'Electronics', id: '1'}, {name: 'Cars', id: '2'}, {name: 'Garden', id: '3'}, {name: 'Home', id: '4'}]},
  {name: 'Housing', id: '2', subCategories: [{name: 'For Rent', id: '1'}, {name: 'For Sale', id: '2'}, {name: 'Sublease', id: '3'}]},
  {name: 'Jobs', id: '3', subCategories: [{name: 'Food and Bev', id: '1'}, {name: 'Tech', id: '2'}, {name: 'Education', id: '3'}, {name: 'Finance', id: '4'}, {name: 'General Labor', id: '5'}]}
];

export interface User {
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
  city: string,
  state: string,
  zip: string
}

export const seedUsers: User[] = [
  {
    name: 'Alicia D. Macomber', 
    email: 'AliciaDMacomber@rhyta.com', 
    password: 'mypassword',
    phoneNumber: '856-672-5718',
    address: '4892 Prospect Street',
    city: 'Haddonfield',
    state: 'NJ',
    zip: '08033'
  },
  {
    name: 'David M. Motley', 
    email: 'DavidMMotley@teleworm.us', 
    password: 'mypassword',
    phoneNumber: '213-333-0527',
    address: '4038 Brannon Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90071'
  },				
]

export interface Post {
  name: string,
  id: string,
  imageURL: string,
  price: number,
  createdAt: Date,
  author: User,
  category: string,
  subCategory: string,
}

export const seedPosts: Post[] = [
  {
    name: 'Laptop',
    id: '1',
    imageURL: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    price: 100,
    createdAt: new Date(),
    author:   
      {
        name: 'Alicia D. Macomber', 
        email: 'AliciaDMacomber@rhyta.com', 
        password: 'mypassword',
        phoneNumber: '856-672-5718',
        address: '4892 Prospect Street',
        city: 'Haddonfield',
        state: 'NJ',
        zip: '08033'
      },
    category: 'Goods',
    subCategory: 'Electronics'
  },
  {
    name: 'Great Car',
    id: '2',
    imageURL: 'https://images.unsplash.com/photo-1591531978723-a3eba46c4a89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80',
    price: 1000,
    createdAt: new Date(),
    author: 
      {
        name: 'David M. Motley', 
        email: 'DavidMMotley@teleworm.us', 
        password: 'mypassword',
        phoneNumber: '213-333-0527',
        address: '4038 Brannon Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90071'
      },
    category: 'Goods',
    subCategory: 'Cars'
  },
  {
    name: 'Laptop',
    id: '1',
    imageURL: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    price: 100,
    createdAt: new Date(),
    author:   
      {
        name: 'Alicia D. Macomber', 
        email: 'AliciaDMacomber@rhyta.com', 
        password: 'mypassword',
        phoneNumber: '856-672-5718',
        address: '4892 Prospect Street',
        city: 'Haddonfield',
        state: 'NJ',
        zip: '08033'
      },
    category: 'Goods',
    subCategory: 'Electronics'
  },
  {
    name: 'Great Car',
    id: '2',
    imageURL: 'https://images.unsplash.com/photo-1591531978723-a3eba46c4a89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80',
    price: 1000,
    createdAt: new Date(),
    author: 
      {
        name: 'David M. Motley', 
        email: 'DavidMMotley@teleworm.us', 
        password: 'mypassword',
        phoneNumber: '213-333-0527',
        address: '4038 Brannon Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90071'
      },
    category: 'Goods',
    subCategory: 'Cars'
  },
  {
    name: 'Laptop',
    id: '1',
    imageURL: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    price: 100,
    createdAt: new Date(),
    author:   
      {
        name: 'Alicia D. Macomber', 
        email: 'AliciaDMacomber@rhyta.com', 
        password: 'mypassword',
        phoneNumber: '856-672-5718',
        address: '4892 Prospect Street',
        city: 'Haddonfield',
        state: 'NJ',
        zip: '08033'
      },
    category: 'Goods',
    subCategory: 'Electronics'
  },
  {
    name: 'Great Car',
    id: '2',
    imageURL: 'https://images.unsplash.com/photo-1591531978723-a3eba46c4a89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80',
    price: 1000,
    createdAt: new Date(),
    author: 
      {
        name: 'David M. Motley', 
        email: 'DavidMMotley@teleworm.us', 
        password: 'mypassword',
        phoneNumber: '213-333-0527',
        address: '4038 Brannon Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90071'
      },
    category: 'Goods',
    subCategory: 'Cars'
  },
]