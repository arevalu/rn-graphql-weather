/* eslint-disable no-nested-ternary */
import { global, styled } from '@core/styles';
import { isLightTheme } from '@core/utils/theme';

export const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 60px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  height: 100%;
  width: 32px;
`;

export const TopBarContent = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
`;

export const CityName = styled.Text`
  color: ${({ theme: { colors, themeTitle } }) =>
    isLightTheme(themeTitle) ? colors.primary : colors.white};
  font-family: ${global.font.weightSemiBold};
  font-size: 22px;
`;

export const DateInfo = styled.Text`
  color: ${({ theme: { colors, themeTitle } }) =>
    isLightTheme(themeTitle) ? colors.gray3 : colors.gray4};
  font-family: ${global.font.weightRegular};
  font-size: 14px;
  text-transform: uppercase;
`;

interface ActionButtonProps {
  isFavorite: boolean;
  isSaved: boolean;
}

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  background-color: ${props =>
    props.isSaved
      ? props.isFavorite
        ? props.theme.colors.yellow
        : props.theme.colors.gray6
      : props.theme.colors.primary};
  border-radius: 36px;
  height: 40px;
  padding: 6px;
  width: 40px;
`;
