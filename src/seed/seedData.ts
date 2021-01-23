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
  city: string,
  state: string,
  zip: string
}

export const seedUsers: User[] = [
  {
    name: 'Alicia D. Macomber', 
    email: 'AliciaDMacomber@rhyta.com', 
    password: 'mypassword',
    city: 'Haddonfield',
    state: 'NJ',
    zip: '08033'
  },
  {
    name: 'David M. Motley', 
    email: 'DavidMMotley@teleworm.us', 
    password: 'mypassword',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90071'
  },				
];

export interface Post {
  name: string,
  id: string,
  price: string,
  location: string,
  category: string,
  subCategory: string,
  description: string
};

export const seedPosts: Post[] = [
  {
    name: 'Laptop',
    id: '1',
    price: '100',
    location: 'Boston, MA',
    category: 'Goods',
    subCategory: 'Electronics',
    description: 'great computer',
  },
];