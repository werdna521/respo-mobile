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
import { RegularText } from '../components/Texts/Texts';

export interface Recipe {
  id: number,
  name: string,
  category: string,
  type: number
}

type Recipes = Array<Recipe> | null;

const Home: React.FC = () => {
  const [_loading, _setLoading] = useState(true);
  const [_refreshing, _setRefreshing] = useState(false);
  const [_recipes, _setRecipes] = useState<Recipes | []>([]);
  const [_filteredRecipes, _setFilteredRecipes] = useState<Recipes | []>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchAsync = async () => {
      const recipes: Recipes = await RecipeRepository.getAll();
      _setRecipes(recipes);
      _setLoading(false);
    };
    fetchAsync().then();
  }, []);

  const _onRefresh = async () => {
    _setRefreshing(true);
    const recipes: Recipes = await RecipeRepository.getAll();
    _setRecipes(recipes);
    _setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        data={_recipes}
        setData={_setFilteredRecipes}
      />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={_filteredRecipes}
        onRefresh={_onRefresh}
        refreshing={_refreshing}
        renderItem={({ item, index }) => {
          const { id, name, type, category } = item;
          return (
            <RecipeCard
              style={[styles.cardItem, (_filteredRecipes !== null ? index === _filteredRecipes.length-1 : false)  ? styles.lastCardItem : null]}
              onPress={() => navigation.navigate('RecipeDetails', { id, type })}
              title={name}
              type={type}
              category={category}
            />
          );
        }}
        keyExtractor={({ id, name }) => `#${id}${name}`}
        ListHeaderComponent={
          <RegularText
            style={styles.listHeader}
            size={dimens.S}
            text="Pull down to refresh"
          />
        }
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
  },
  listHeader: {
    marginVertical: dimens.XS,
    alignSelf: 'center'
  }
});