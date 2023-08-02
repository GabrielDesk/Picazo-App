import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from 'constants/colors';

export const SecondaryButton = ({
  onPressPositive = () => {},
  Disabled = false,
  TextAnimation,
  Icon,
  TitleText,
  useNativeDriver,
}) => (
  <TouchableOpacity
    disabled={Disabled}
    style={[styles.Button, { opacity: Disabled ? 0.5 : 1 }]}
    onPress={() => onPressPositive()}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>{TitleText}</Text>
      <MaterialCommunityIcons name={Icon} color={COLORS.ROXO_APP} size={20} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    // fontFamily: FONTS.FonteProTrial,
    color: COLORS.ROXO_APP,
    fontSize: 16,
    marginRight: 10,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: COLORS.BRANCO_APP,
    borderWidth: 0.5,
    borderColor: COLORS.ROXO_APP,
    marginHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 5,
  },
});
