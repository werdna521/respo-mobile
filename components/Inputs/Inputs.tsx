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
import { StyleProp, TextInput } from 'react-native';
import { colors } from '../../utils/variables';
import * as stylesheet from './Inputs.style';

type InputProps = {
  style?: StyleProp<any>,
  onChange?: (text: string) => void
};

export const Input: React.FC<InputProps> = ({ style, onChange }) => {
  const styles = stylesheet.input;

  return (
    <TextInput
      onChangeText={onChange}
      style={[style, styles.main]}
      placeholder="Search for something"
      placeholderTextColor={colors.PRIMARY_ACCENT}
    />
  );
};