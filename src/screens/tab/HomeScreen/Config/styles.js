import { COLORS } from '../../../../constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ButtonContainer: {
    height: 100,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

export default styles;
