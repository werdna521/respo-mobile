import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const getDimension = () => Dimensions.get('window');

export const getScreenWidth = () => getDimension().width;

export const getScreenHeight = () => getDimension().height;

export const getStatusBarHeight = () => Constants.statusBarHeight;