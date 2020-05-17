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

export const filterMixinProps = (mixinProps: any) => {
  const filteredProps: any = {};
  for (const key in mixinProps)
    if (mixinProps.hasOwnProperty(key))
      mixinProps[key] !== undefined ? filteredProps[key] = mixinProps[key] : null;
  return filteredProps;
};

export const getRecipeCategory = (type: number): string => {
  switch (type) {
    case 0: return 'Bread';
    case 1: return 'Cakes';
    case 2: return 'Toppings & Fillings'
    case 3: return 'Potatoes';
    case 4: return 'Chinese Dim Sums';
    case 5: return 'Indonesian Traditional';
    case 6: return 'Doughnuts';
    case 7: return 'Medicines';
    case 8: return 'Cookies';
    case 9: return 'Cream Puffs';
    case 10: return 'Pancakes';
    case 11: return 'Shrimps & Prawns';
    default: return 'Unknown';
  }
};

export const getRecipeThumbnail = (type: number) => {
  switch (type) {
    case 0: return require('../assets/img/bread.png');
    case 1: return require('../assets/img/cake.png');
    case 2: return require('../assets/img/toppings-fillings.png');
    case 3: return require('../assets/img/potato.png');
    case 4: return require('../assets/img/chinese-dim-sum.png');
    case 5: return require('../assets/img/indonesia-traditionals.png');
    case 6: return require('../assets/img/doughnut.png');
    case 7: return require('../assets/img/medicine.png');
    case 8: return require('../assets/img/cookies.png');
    case 9: return require('../assets/img/cream-puffs.png');
    case 10: return require('../assets/img/pancakes.png');
    case 11: return require('../assets/img/shrimps-prawns.png');
    default: return require('../assets/img/fries.png');
  }
};