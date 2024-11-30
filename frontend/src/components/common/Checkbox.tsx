import { Dispatch, SetStateAction } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../constants/theme";

type TProps = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

const Checkbox = ({ checked, setChecked }: TProps) => {
  return (
    <TouchableOpacity onPress={(prevChecked) => setChecked(!prevChecked)}>
      {checked ? (
        <MaterialCommunityIcons name="checkbox-marked" size={24} color={COLORS.secondaryDark} />
      ) : (
        <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color={COLORS.secondaryDark} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Checkbox;
