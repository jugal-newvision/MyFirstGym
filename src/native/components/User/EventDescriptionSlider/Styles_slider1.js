import { Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = percentage * viewportWidth / 100;
  return Math.round(value);
}

export const classslideWidth = wp(36.3);
export const classsliderItemHorizontalMargin = wp(2);
export const classsliderWidth = viewportWidth;
export const classsliderItemWidth = classslideWidth+ classsliderItemHorizontalMargin* 2;