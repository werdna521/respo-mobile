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

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const App: React.FC = () => {
  const [_loading, _setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      await Font.loadAsync({
        'montserrat-bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
        'montserrat-regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf')
      });
      _setLoading(false);
    };
    bootstrapAsync().then();
  });

  if (_loading) return <AppLoading/>;

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
};

export default App;
