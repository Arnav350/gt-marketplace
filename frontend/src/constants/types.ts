import { NavigatorScreenParams } from "@react-navigation/native";

//database

export type TUser = {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  avatar: string | null;
  address: string | null;
  address_extra: string | null;
  created_at: Date;
};

export type TCategory = "Clothing" | "Electronics" | "Furniture" | "Books" | "Other";

export type TItem = {
  id: string;
  seller_id: string;
  title: string;
  price: number;
  category: TCategory | null;
  condition: "Brand New" | "Like New" | "Good" | "Fair" | "Poor" | null;
  description: string | null;
  address: string | null;
  address_extra: string | null;
  size: "Large" | "Medium" | "Small" | null;
  score: number;
  created_at: Date;
  buyer_id: string | null;
  price_sold: number | null;
  sold_at: Date | null;
  completed_at: Date | null;
};

export type TSave = {
  user_id: string;
  item_id: string;
  created_at: Date;
};

export type TDelivery = {
  id: string;
  user_id: string;
  item_id: string;
  status: "Ordered" | "Retrieved" | "Completed";
  price: number;
  address: string;
  address_extra: string | null;
  created_at: Date;
  retrieved_at: Date | null;
  completed_at: Date | null;
};

export type TImage = {
  item_id: string;
  image: string;
  created_at: Date;
};

export type TService = {
  id: string;
  user_id: string;
  package: "Basic" | "Standard" | "Premium";
  status: "Ordered" | "Checked" | "Confirmed" | "Completed";
  address: string;
  address_extra: string | null;
  created_at: Date;
  checked_at: Date | null;
  price: number | null;
  notes: string | null;
  timeslot: Date | null;
  confirmed_at: Date | null;
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
  Item: { itemId: string };
  SellingList: undefined;
  Wishlist: undefined;
};

export type TMessagesStackParamsList = {
  Messages: undefined;
  Chat: { userId: string };
  Payment: undefined;
  Delivery: undefined;
  Summary: undefined;
};
