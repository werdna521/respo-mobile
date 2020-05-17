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

import React  from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from '../../components/Bars/Bars';
import { RecipeCard } from '../../components/Cards/Cards';
import { dimens } from '../../utils/variables';

const dummy = [
  {
    id: 1,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 2,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 3,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 4,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 5,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 6,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 7,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 8,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 9,
    name: 'Kentang Goreng',
    type: 1
  },
  {
    id: 10,
    name: 'Kentang Goreng',
    type: 1
  }
];

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={dummy}
        renderItem={({ item, index }) => {
          const { name, type } = item;
          return (
            <RecipeCard
              style={[styles.cardItem, index === dummy.length-1 ? styles.lastCardItem : null]}
              title={name}
              type={type}
            />
          );
        }}
        keyExtractor={({ id, name }) => `#${id}${name}`}
      />
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