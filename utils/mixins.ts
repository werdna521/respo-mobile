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

import { filterMixinProps } from './helpers';

export const paddingMixin = (
  paddingVertical?: number,
  paddingHorizontal?: number
) => filterMixinProps({ paddingVertical, paddingHorizontal });

export const paddingAroundMixin = (
  paddingTop?: number,
  paddingRight?: number,
  paddingBottom?: number,
  paddingLeft?: number
) => filterMixinProps({ paddingTop, paddingRight, paddingBottom, paddingLeft });

export const marginMixin = (
  marginVertical?: number,
  marginHorizontal?: number
) => filterMixinProps({ marginVertical, marginHorizontal });

export const marginAroundMixin = (
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number
) => filterMixinProps({ marginTop, marginRight, marginBottom, marginLeft });

export const flexMixin = (
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string
) => filterMixinProps({ flexDirection, justifyContent, alignItems });

export const fontMixin = (
  color?: string,
  fontSize?: number,
  fontFamily?: string
) => filterMixinProps({ color, fontSize, fontFamily });

export const sizingMixin = (
  width?: number | string,
  height?: number | string
) => filterMixinProps({ width, height });