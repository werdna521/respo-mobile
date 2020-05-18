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
// limitations under the License.import React from 'react';

import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import * as stylesheet from './Bars.style';
import { BoldText } from '../Texts/Texts';
import { Input } from '../Inputs/Inputs';
import { dimens } from '../../utils/variables';
import { Recipe } from '../../screens/Home';
import Fuse from 'fuse.js';

type SearchBarProps = {
  data: Array<Recipe> | null,
  setData: React.Dispatch<React.SetStateAction<Array<Recipe> | [] | null>>
};

type FuseSearchResult = {
  item: Recipe,
  refIndex: number
};

export const SearchBar: React.FC<SearchBarProps> = ({
  data,
  setData
}) => {
  const [_query, _setQuery] = useState('');

  const styles = stylesheet.searchBar;

  useEffect(() => {
    if (_query === '') return setData(data);
    if (data === null) return;
    const fuse = new Fuse(data, {
      keys: ['name', 'category']
    });
    const result: FuseSearchResult[] = fuse.search(_query);
    setData(result.map(({ item }) => item));
  }, [_query]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          resizeMode="stretch"
          source={require('../../assets/img/logo.png')}
        />
        <BoldText
          size={dimens.XL}
          style={styles.logoText}
          text="Respo"
        />
      </View>
      <Input
        onChange={text => _setQuery(text)}
        style={styles.searchInput}
      />
    </View>
  );
};