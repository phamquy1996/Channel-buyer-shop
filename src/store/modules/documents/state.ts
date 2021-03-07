import { UserDocuments } from '@/@types';

export type Category = {
  id: Number,
  name: String,
  status: Number,
  image: String,
  subCategories : Subcategory[] | undefined,
  childCategoris : ChildCategory[] | undefined
}

export type Subcategory = {
  id: Number,
  name: String,
  status: Number,
  image: String,
  childCategories : ChildCategory[]
}

export type Shipping = {
  id: Number,
  name: String,
  maxgram: Number,
  mingram: Number,
  money_shipping: Number,
  status: Boolean
}

export type ChildCategory = {
  id: Number,
  name: String,
  status: Number,
  image: String
}

export type Classify = {
  id: Number,
  name: String,
  status: Number,
  qty: Number
}

export type SubClassify = {
  id: Number,
  name: String,
  status: Number,
  qty: Number
}

export type State = {
  data: UserDocuments | null;
  categories : Category[];
  subcategoris : Subcategory[] | undefined;
  childCategoris : ChildCategory[] |undefined;
  category: ChildCategory | undefined;
  nameProduct: String,
  shippings: Shipping[] 
}

export const state: State = {
  data: null,
  categories: [],
  subcategoris : [],
  childCategoris : [],
  category: undefined,
  nameProduct: '',
  shippings: []
};
