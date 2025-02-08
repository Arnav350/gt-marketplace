import { NavigatorScreenParams } from "@react-navigation/native";

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
  Item: undefined;
  SellingList: undefined;
  Wishlist: undefined;
};
