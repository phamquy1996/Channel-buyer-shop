export type Category = {
  id: Number;
  name: String;
  image: String;
  status: Number;
};

export type State = {
  listCategries: Category[];
};

export const state: State = {
  listCategries: [],
};
