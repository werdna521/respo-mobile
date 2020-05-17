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

import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { flexMixin, sizingMixin } from '../utils/mixins';
import { flexes } from '../utils/variables';
import { getScreenWidth } from '../utils/dimens';
import { useRoute, RouteProp } from '@react-navigation/native';

type RootStackProps = {
  Home: {},
  RecipeDetails: {
    id: number
  }
};
type RouteProps = RouteProp<RootStackProps, 'RecipeDetails'>

const RecipeDetails = () => {

  const route = useRoute<RouteProps>();

  useEffect(() => {
    const { id } = route.params;
    alert(id);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.topBgImage}
        source={require('../assets/img/bg.png')}
      />
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBgImage: {
    ...sizingMixin('100%', 0.64 * getScreenWidth())
  }
});