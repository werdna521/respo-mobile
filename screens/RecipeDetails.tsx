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

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { sizingMixin } from '../utils/mixins';
import { getScreenWidth } from '../utils/dimens';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RecipeTray } from '../components/RecipeTray/RecipeTray';
import * as RecipeRepository from '../api/recipe/recipe';
import { LoadingIndicator } from '../components/Loadings/Loadings';
import { getRecipeCategory } from '../utils/helpers';

type RootStackProps = {
  Home: {},
  RecipeDetails: {
    id: number,
    type: number
  }
};

type RouteProps = RouteProp<RootStackProps, 'RecipeDetails'>

type RecipeDetails = {
  name: string,
  category: string,
  type: number,
  ingredients: string,
  procedures: string
};

const RecipeDetails = () => {
  const [_loading, _setLoading] = useState(true);
  const [_name, _setName] = useState('');
  const [_category, _setCategory] = useState('');
  const [_ingredients, _setIngredients] = useState('');
  const [_procedures, _setProcedures] = useState('');

  const route = useRoute<RouteProps>();

  useEffect(() => {
    const fetchAsync = async (id: number, type: number) => {
      const recipeDetails: RecipeDetails = await RecipeRepository.getDetails(id, type);
      _setName(recipeDetails.name);
      _setCategory(recipeDetails.category);
      _setIngredients(recipeDetails.ingredients);
      _setProcedures(recipeDetails.procedures);
      _setLoading(false);
    };
    const { id, type } = route.params;
    fetchAsync(id, type).then();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.topBgImage}
        source={require('../assets/img/bg.png')}
      />
      <RecipeTray
        name={_name}
        category={_category}
        ingredients={_ingredients}
        procedures={_procedures}
      />
      <LoadingIndicator show={_loading} />
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBgImage: {
    ...sizingMixin('100%', 0.64 * getScreenWidth()),
    position: 'absolute',
    top: 0
  }
});