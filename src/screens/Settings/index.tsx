import React from 'react';
import {View} from 'react-native';

import useSwitchTheme from '../../hooks/useSwitchTheme';
import useSwitchFormatTemp from '../../hooks/useSwitchFormatTemp';
import {LayoutBase, Heading, Switch} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import {
  SettingGroup,
  TitleWrapper,
  SettingTitle,
  SettingRow,
  SettingItem,
} from './styles';

const Settings = () => {
  const {tempOptions, toggleFormatTemp} = useSwitchFormatTemp();
  const {themeOptions, toggleTheme} = useSwitchTheme();

  return (
    <LayoutBase>
      <LayoutSpacing>
        <View>
          <TitleWrapper>
            <Heading>Settings</Heading>
          </TitleWrapper>

          <View>
            <SettingGroup>
              <SettingTitle>Weather</SettingTitle>
              <SettingRow>
                <SettingItem>Temperature</SettingItem>
                <Switch options={tempOptions} onPress={toggleFormatTemp} />
              </SettingRow>
            </SettingGroup>
            <SettingGroup>
              <SettingTitle>Other</SettingTitle>
              <SettingRow>
                <SettingItem>Dark Mode</SettingItem>
                <Switch options={themeOptions} onPress={toggleTheme} />
              </SettingRow>
            </SettingGroup>
          </View>
        </View>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Settings;
