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
    case 1: return 'Potatoes';
    case 2: return 'Chicken';
    default: return 'Unknown';
  }
}