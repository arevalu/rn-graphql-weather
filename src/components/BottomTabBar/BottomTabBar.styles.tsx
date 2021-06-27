import styled from 'styled-components/native';

import {global} from '../../styles/GlobalStyles';

export const BottomTabBarWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.paper};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${global.spacing.base} 0;
`;