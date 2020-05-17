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
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from '../components/Bars/Bars';
import { RecipeCard } from '../components/Cards/Cards';
import { dimens } from '../utils/variables';
import { LoadingIndicator } from '../components/Loadings/Loadings';
import { useNavigation } from '@react-navigation/native';
import * as RecipeRepository from '../api/recipe/recipe';

interface Recipe {
  id: number,
  name: string,
  type: number
}

type Recipes = Array<Recipe>

const Home: React.FC = () => {
  const [_loading, _setLoading] = useState(true);
  const [_recipes, _setRecipes] = useState<Recipes | []>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchAsync = async () => {
      const recipes: Recipes = await RecipeRepository.getAll();
      _setRecipes(recipes);
      _setLoading(false);
    };
    fetchAsync().then();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={_recipes}
        renderItem={({ item, index }) => {
          const { id, name, type } = item;
          return (
            <RecipeCard
              style={[styles.cardItem, index === _recipes.length-1 ? styles.lastCardItem : null]}
              onPress={() => navigation.navigate('RecipeDetails', { id })}
              title={name}
              type={type}
            />
          );
        }}
        keyExtractor={({ id, name }) => `#${id}${name}`}
      />
      <LoadingIndicator show={_loading} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    marginHorizontal: dimens.M,
    paddingVertical: dimens.M
  },
  cardItem: {
    marginVertical: dimens.XS
  },
  lastCardItem: {
    marginBottom: dimens.XXL
  }
});