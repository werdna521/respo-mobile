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

import { filterResponse, generateURL, get } from '../utils';
import { getRecipeCategory } from '../../utils/helpers';

export const getAll = async () => {
  const response = await get(generateURL('/recipes.php'));
  const filteredResponse: [{ id: number, name: string, type: number }] = await filterResponse(response);
  if (!filteredResponse) return null;
  return filteredResponse.map(({ name, type, id }) => ({
    id,
    name: name,
    type: type,
    category: getRecipeCategory(type)
  }))
};

export const getDetails = async (id: number, type: number) => {
  const response = await get(generateURL('/recipe.php'), { recipe_id: id });
  const filteredResponse = await filterResponse(response);
  return filteredResponse ? {
    name: filteredResponse.name,
    type,
    category: getRecipeCategory(type),
    ingredients: filteredResponse.ingredients,
    procedures: filteredResponse.procedures
  } : filteredResponse;
};