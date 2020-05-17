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
import { FlexStyle, Image, ImageStyle, StyleProp, TextStyle, TransformsStyle, View, ViewStyle } from 'react-native';
import { colors, dimens } from '../../utils/variables';
import * as stylesheet from './Cards.style';
import { BoldText, RegularText } from '../Texts/Texts';
import { getRecipeCategory } from '../../utils/helpers';

type CardProps = {
  children: ReactNode,
  color?: string,
  style?: StyleProp<any>
};

export const Card: React.FC<CardProps> = ({
  children,
  color = colors.LIGHT,
  style = {}
}) => {
  const styles = stylesheet.card(color);

  return (
    <View
      style={[styles.main, style]}
      children={children}
    />
  );
};

type RecipeCardProps = {
  title: string,
  type: number,
  style?: StyleProp<any>
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  type,
  style = {}
}) => {
  const styles = stylesheet.recipeCard;

  return (
    <Card style={style}>
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={require('../../assets/img/fries.png')}
        />
        <View style={styles.textContainer}>
          <BoldText
            size={dimens.byFour(4.5)}
            text={title}
          />
          <RegularText
            size={dimens.byFour(3.5)}
            text={getRecipeCategory(type)}
          />
          <RegularText
            style={styles.authorText}
            size={dimens.byFour(3.5)}
            text="by Admin"
          />
        </View>
      </View>
    </Card>
  );
};