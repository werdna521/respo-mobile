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
import { borderRadius, colors, dimens, flexes } from '../../utils/variables';
import { flexMixin, paddingAroundMixin } from '../../utils/mixins';
import { getStatusBarHeight } from '../../utils/dimens';

export const searchBar = StyleSheet.create({
  container: {
    ...flexMixin(flexes.direction.COLUMN, flexes.justify.START, flexes.align.STRETCH),
    ...paddingAroundMixin(dimens.L+getStatusBarHeight(), dimens.M, dimens.XXL, dimens.M),
    borderBottomLeftRadius: borderRadius.ROUNDED,
    borderBottomRightRadius: borderRadius.ROUNDED,
    backgroundColor: colors.PRIMARY_LIGHT,
    elevation: 8
  },
  topContainer: {
    ...flexMixin(flexes.direction.ROW, flexes.justify.START, flexes.align.CENTER)
  },
  logo: {
    height: dimens.byFour(11),
    width: dimens.byFour(9)
  },
  logoText: {
    marginLeft: dimens.M
  },
  searchInput: {
    marginTop: dimens.XS
  }
});