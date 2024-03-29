import { global, styled } from '@core/styles';

interface TitleTextProps {
  primary?: boolean;
}
export const TitleText = styled.Text<TitleTextProps>`
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.text};
  font-family: ${global.font.weightBold};
  font-size: 32px;
  line-height: 38px;
`;
