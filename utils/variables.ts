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

export const colors = {
  LIGHT: '#fafafa',
  PRIMARY_LIGHT: '#efebe9',
  PRIMARY_ACCENT: '#d7ccc8',
  PRIMARY_DARK: '#3e2723'
};

export const dimens = {
  XXS: 4,
  XS: 8,
  S: 12,
  M: 16,
  L: 20,
  XL: 24,
  XXL: 28,
  byFour: (val: number) => val * 4
};

export const borderRadius = {
  CARD: 16,
  ROUNDED: 32
};

export const flexes = {
  direction: {
    ROW: 'row',
    COLUMN: 'column'
  },
  justify: {
    CENTER: 'center',
    START: 'flex-start',
    END: 'flex-end',
    BETWEEN: 'space-between',
    AROUND: 'space-around',
    EVENLY: 'space-evenly'
  },
  align: {
    CENTER: 'center',
    START: 'flex-start',
    END: 'flex-end',
    STRETCH: 'stretch'
  }
};

export const fonts = {
  REGULAR: 'montserrat-regular',
  BOLD: 'montserrat-bold'
};