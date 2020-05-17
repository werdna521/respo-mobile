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

import { StyleSheet } from 'react-native';
import { flexMixin, paddingMixin, sizingMixin } from '../../utils/mixins';
import { borderRadius, dimens, flexes } from '../../utils/variables';

export const card = (backgroundColor: string) => StyleSheet.create({
  main: {
    ...paddingMixin(dimens.M, dimens.XL),
    backgroundColor,
    borderRadius: borderRadius.CARD,
    elevation: 4
  }
});

export const recipeCard = StyleSheet.create({
  container: {
    ...flexMixin(flexes.direction.ROW, flexes.justify.START, flexes.align.CENTER)
  },
  thumbnail: {
    ...sizingMixin(dimens.byFour(20), dimens.byFour(20))
  },
  textContainer: {
    ...flexMixin(flexes.direction.COLUMN, flexes.justify.START, flexes.align.START),
    marginLeft: dimens.S,
    flex: 1
  },
  authorText: {
    alignSelf: 'flex-end'
  }
});