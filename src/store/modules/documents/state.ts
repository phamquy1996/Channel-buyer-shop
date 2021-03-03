import { UserDocuments } from '@/@types';

export type Category = {
  id: Number,
  name: String,
  status: Number,
  image: String,
  subCategories : Subcategory[],
  childCategoris : ChildCategory[]
}

export type Subcategory = {
  id: Number,
  name: String,
  status: Number,
  image: String,
  childCategoris : ChildCategory[]
}

export type ChildCategory = {
  id: Number,
  name: String,
  status: Number,
  image: String
}
export type Categories = {
  categories : Category[]
}

export type Subcategories = {
  Subcategories : Subcategory[]
}
export type State = {
  data: UserDocuments | null;
  categories : Category[];
  subcategoris : Subcategory[] | undefined;
  childCategoris : ChildCategory[] |undefined;
}

export const state: State = {
  data: null,
  categories: [],
  subcategoris : [],
  childCategoris : []
};
