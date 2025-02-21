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

export type TCategory = "Clothing" | "Electronics" | "Furniture" | "Books" | "Other" | null;

export type TCondition = "Brand New" | "Like New" | "Good" | "Fair" | "Poor" | null;

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

export type TMessage = {
  id: string;
  sender_id: string;
  receiver_id: string;
  format: "Text" | "Image" | "File";
  content: string;
  created_at: Date;
};

export type TReport = {
  id: string;
  reporter_id: string;
  reportee_id: string;
  reason: string | null;
  created_at: Date;
};

export type TBlock = {
  blocker_id: string;
  blockee_id: string;
  created_at: Date;
};

export type TBan = {
  id: string;
  email: string;
  created_at: Date;
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
