import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { primaryColor } from '../../shared/ColorsConstants';

export const Container = styled.View`
    flex: 1;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 100px;
`;

export const Ball = styled(Animated.View)`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${primaryColor};
`;