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
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as stylesheet from './Loadings.style';

type LoadingIndicatorProps = {
  show?: boolean
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ show }) => {
  const styles = stylesheet.loadingIndicator;

  return (
    show ? (
      <View style={[StyleSheet.absoluteFillObject, styles.main]}>
        <ActivityIndicator size="large" />
      </View>
    ) : null
  );
};