import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';

interface BlockProps {
  shape: string[][];
  orientation: number;
  color: string;
  position: { x: number; y: number };
  isFixed: boolean;
  onDrag: (x: number, y: number) => void;
  onRelease: (x: number, y: number) => void;
}

const Block: React.FC<BlockProps> = ({ shape, orientation, color, position, isFixed, onDrag, onRelease }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    pan.setValue({ x: position.x * 40, y: position.y * -240 });
  }, [position]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => !isFixed,
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {
      if (!isFixed) {
        const newX = Math.floor((gestureState.moveX + 20) / 40);
        const newY = Math.floor((gestureState.moveY + 20) / 40);
        onRelease(newX, newY);
        pan.setValue({ x: 0, y: 0 }); // Reset position
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.block,
        {
          width: shape[0].length * 40,
          height: shape.length * 40,
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
            { rotate: `${orientation}deg` },
          ],
        },
      ]}
    >
      {shape.map((row, rowIndex) =>
        row.map((cell, cellIndex) =>
          cell === '1' ? (
            <View
              key={`${rowIndex}-${cellIndex}`}
              style={[
                styles.cell,
                {
                  left: cellIndex * 40,
                  top: rowIndex * 40,
                  backgroundColor: color,
                },
              ]}
            />
          ) : null
        )
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  block: {
    position: 'absolute',
  },
  cell: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000', // Inner border color
  },
});

export default Block;
