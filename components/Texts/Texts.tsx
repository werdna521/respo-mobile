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

import React from 'react';
import { StyleProp, Text } from 'react-native';
import { colors, dimens } from '../../utils/variables';
import * as stylesheet from './Texts.style';

type ITextProps = {
  text: string,
  style?: StyleProp<any>,
}

type TextProps = ITextProps & {
  color?: string,
  size?: number
}

const IText: React.FC<TextProps> = ({
  text,
  style
}) => {
  return (
    <Text style={style}>
      {text}
    </Text>
  );
};

export const RegularText: React.FC<TextProps> = ({
  text,
  style = {},
  color = colors.PRIMARY_DARK,
  size = dimens.M
}) => {
  const styles = stylesheet.regularText(color, size)

  return (
    <IText
      style={[style, styles.main]}
      text={text}
    />
  );
};

export const BoldText: React.FC<TextProps> = ({
  text,
  style = {},
  color = colors.PRIMARY_DARK,
  size = dimens.M
}) => {
  const styles = stylesheet.boldText(color, size);

  return (
    <IText
      style={[style, styles.main]}
      text={text}
    />
  );
};