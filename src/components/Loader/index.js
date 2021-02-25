import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { Container, Ball } from "./styles";

export default function Loader() {

  const animations = {
    one: new Animated.Value(0),
    two: new Animated.Value(0),
    three: new Animated.Value(0),
  };

  function onAnimate(animation, nextAnimation) {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -10,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(nextAnimation);
  }

  function onStartAnimated() {
    function onThreeAnimation() {
      onAnimate(animations.three, () => {
        setTimeout(onStartAnimated, 300);
      });
    }
    function onTwoAnimation() {
      onAnimate(animations.two, onThreeAnimation);
    }
    onAnimate(animations.one, onTwoAnimation);
  }

  useEffect(() => {
    onStartAnimated()
  }, []);

  return (
    <Container>
      <Ball style={{
        transform: [{
          translateY: animations.one
        }]
      }} />
      <Ball style={{
        transform: [{
          translateY: animations.two
        }]
      }} />
      <Ball style={{
        transform: [{
          translateY: animations.three
        }]
      }} />
    </Container>
  );
}