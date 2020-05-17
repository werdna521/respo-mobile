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
import { flexMixin, paddingAroundMixin, sizingMixin } from '../../utils/mixins';
import { getScreenHeight, getScreenWidth } from '../../utils/dimens';
import { borderRadius, colors, dimens, flexes } from '../../utils/variables';

export const trayList = StyleSheet.create({
  main: {
    marginVertical: dimens.XS
  }
});

export const recipeTray = StyleSheet.create({
  container: {
    ...sizingMixin('100%', getScreenHeight() - 0.6 * getScreenWidth()),
    ...paddingAroundMixin(dimens.XL, dimens.XL, undefined, dimens.XL),
    ...flexMixin(flexes.direction.COLUMN, flexes.justify.START, flexes.align.STRETCH),
    backgroundColor: colors.PRIMARY_LIGHT,
    borderTopLeftRadius: borderRadius.ROUNDED,
    borderTopRightRadius: borderRadius.ROUNDED,
    position: 'absolute',
    bottom: 0
  },
  authorText: {
    alignSelf: 'flex-end'
  },
  scroll: {
    ...flexMixin(flexes.direction.COLUMN, flexes.justify.START, flexes.align.STRETCH)
  },
  line: {
    ...sizingMixin('100%', 1),
    backgroundColor: colors.PRIMARY_ACCENT,
    marginTop: dimens.M
  }
});