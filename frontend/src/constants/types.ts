import { NavigatorScreenParams } from "@react-navigation/native";

//database

export type TItem = {
  id: string;
  seller_id: string;
  title: string;
  price: number;
  category: TCategory;
  condition: TCondition;
  description: string | null;
  address: string | null;
  address_extra: string | null;
  size: TSize | null;
  score: number;
  created_at: Date;
  buyer_id: string | null;
  price_sold: number | null;
  sold_at: Date | null;
  completed_at: Date | null;
};

//stacks

export type TAuthStackParamsList = {
  Register: undefined;
  RegisterProfile: undefined;
  Login: undefined;
  ForgotPassword: undefined;
};

export type TTabStackParamsList = {
  HomeStack: NavigatorScreenParams<THomeStackParamsList>;
  ServicesStack: undefined;
  CreateStack: undefined;
  MessagesStack: undefined;
  ProfileStack: undefined;
};

export type THomeStackParamsList = {
  Home: undefined;
  Explore: undefined;
  Item: TItem;
  SellingList: undefined;
  Wishlist: undefined;
};

//enums

export type TCategory = "Clothing" | "Electronics" | "Furniture" | "Books" | "Other" | null;

export type TCondition = "Brand New" | "Like New" | "Good" | "Fair" | "Poor" | null;

export type TSize = "Large" | "Medium" | "Small" | null;
