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

import React from 'react';
import { ScrollView, View } from 'react-native';
import * as stylesheet from './RecipeTray.style';
import { BoldText, RegularText } from '../Texts/Texts';
import { dimens } from '../../utils/variables';

type TrayListProps = {
  title: string,
  content: string
};

const TrayList: React.FC<TrayListProps> = ({
  title,
  content
}) => {
  const styles = stylesheet.trayList

  return (
    <View style={styles.main}>
      <BoldText
        size={dimens.L}
        text={title}
      />
      <RegularText text={content} />
    </View>
  );
};

type RecipeTrayProps = {
  name: string,
  category: string,
  ingredients: string,
  procedures: string
};

export const RecipeTray: React.FC<RecipeTrayProps> = ({
  name,
  category,
  ingredients,
  procedures
}) => {
  const styles = stylesheet.recipeTray;

  return (
    <View style={styles.container}>
      <BoldText
        size={dimens.XL}
        text={name}
      />
      <RegularText
        size={dimens.byFour(3.5)}
        text={category}
      />
      <RegularText
        style={styles.authorText}
        size={dimens.byFour(3.5)}
        text="by Admin"
      />
      <View style={styles.line} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <TrayList
          title="Ingredients"
          content={ingredients}
        />
        <TrayList
          title="Directions"
          content={procedures}
        />
      </ScrollView>
    </View>
  );
};