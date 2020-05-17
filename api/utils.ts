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

const URL = 'https://melissa205.000webhostapp.com/recipe/api/v2';

const parseURL = (url: string, query: any): string => {
  const arr = [];
  for (const key in query)
    if (query.hasOwnProperty(key))
      arr.push(`${key}=${query[key]}`);
  if (JSON.stringify(query) !== '{}') return `${url}?${arr.join('&')}`;
  return url;
};

export const generateURL = (endpoint: '/recipe.php' | '/recipes.php') => `${URL}${endpoint}`;

export const get = async (url: string, query: any = {}) => {
  return await fetch(parseURL(url, query), {
    method: 'GET'
  });
};

export const filterResponse = async (response: Response) => {
  if (response.status !== 200) return null;
  return await response.json();
}