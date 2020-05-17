// Copyright 2020 Andrew Cen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { ReactNode } from 'react';
import {
  FlexStyle,
  GestureResponderEvent,
  Image,
  ImageStyle,
  StyleProp,
  TextStyle, TouchableOpacity,
  TransformsStyle,
  View,
  ViewStyle
} from 'react-native';
import { colors, dimens } from '../../utils/variables';
import * as stylesheet from './Cards.style';
import { BoldText, RegularText } from '../Texts/Texts';
import { getRecipeCategory, getRecipeThumbnail } from '../../utils/helpers';

type CardProps = {
  children: ReactNode,
  color?: string,
  style?: StyleProp<any>,
  onPress?: () => void
};

export const Card: React.FC<CardProps> = ({
  children,
  color = colors.LIGHT,
  style = {},
  onPress
}) => {
  const styles = stylesheet.card(color);

  return (
    <TouchableOpacity
      onPress={() => onPress ? onPress() : null}
      activeOpacity={onPress ? 0.9 : 1}
      style={[styles.main, style]}
    >
      <View children={children} />
    </TouchableOpacity>
  );
};

type RecipeCardProps = {
  title: string,
  category: string,
  type: number,
  style?: StyleProp<any>,
  onPress?: () => void
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  type,
  category,
  style = {},
  onPress
}) => {
  const styles = stylesheet.recipeCard;

  return (
    <Card
      style={style}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={getRecipeThumbnail(type)}
        />
        <View style={styles.textContainer}>
          <BoldText
            size={dimens.byFour(4.5)}
            text={title}
          />
          <RegularText
            size={dimens.byFour(3.5)}
            text={category}
          />
          <RegularText
            style={styles.authorText}
            size={dimens.S}
            text="by Admin"
          />
        </View>
      </View>
    </Card>
  );
};