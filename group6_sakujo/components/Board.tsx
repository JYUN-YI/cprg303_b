import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Block from './Block';
import BlockSelector from './BlockSelector';

const BOARD_SIZE = 10; // 10x10 grid
const CELL_SIZE = 40; // Cell size in pixels

const Board: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0)));
  const [currentBlock, setCurrentBlock] = useState<{ shape: string[][], orientation: number, color: string } | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [fixedBlocks, setFixedBlocks] = useState<Array<{ shape: string[][], orientation: number, color: string, position: { x: number; y: number } }>>([]);

  useEffect(() => {
    generateNewBlock();
  }, []);

  const generateNewBlock = () => {
    const shapes = [
      { shape: [['1', '1'], ['1', '0']], color: getRandomColor() }, // L Shape
      { shape: [['1', '1', '1'], ['0', '1', '0']], color: getRandomColor() }, // T Shape
      { shape: [['1', '1', '1', '1']], color: getRandomColor() },       // I Shape
    ];
    const index = Math.floor(Math.random() * shapes.length);
    const shape = shapes[index].shape;
    const orientation = Math.floor(Math.random() * 4) * 90; // Random rotation
    const color = shapes[index].color;
    setCurrentBlock({ shape, orientation, color });
    setPosition({ x: Math.floor(BOARD_SIZE / 2) - Math.floor(shape[0].length / 2), y: -shape.length }); // Start outside the grid
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const isValidPosition = (shape: string[][], x: number, y: number): boolean => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[0].length; col++) {
        if (shape[row][col] === '1') {
          if (x + col < 0 || x + col >= BOARD_SIZE || y + row < 0 || y + row >= BOARD_SIZE || grid[y + row][x + col] !== 0) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placeBlock = (x: number, y: number) => {
    if (!currentBlock) return;

    const shape = currentBlock.shape;
    const newGrid = grid.map(row => row.slice());

    if (isValidPosition(shape, x, y)) {
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[0].length; col++) {
          if (shape[row][col] === '1') {
            newGrid[y + row][x + col] = 1;
          }
        }
      }
      setGrid(newGrid);
      setFixedBlocks([...fixedBlocks, { shape: currentBlock.shape, orientation: currentBlock.orientation, color: currentBlock.color, position: { x, y } }]);
      clearFullRowsAndColumns();
      generateNewBlock();
    } else {
      Alert.alert("Can't place block here!");
    }
  };

  const clearFullRowsAndColumns = () => {
    const newGrid = grid.map(row => row.slice());
    let rowsCleared = 0;
    let columnsCleared = 0;

    // Clear full rows
    for (let row = 0; row < BOARD_SIZE; row++) {
      if (newGrid[row].every(cell => cell !== 0)) {
        newGrid.splice(row, 1);
        newGrid.unshift(Array(BOARD_SIZE).fill(0));
        rowsCleared++;
      }
    }

    // Clear full columns
    for (let col = 0; col < BOARD_SIZE; col++) {
      let fullColumn = true;
      for (let row = 0; row < BOARD_SIZE; row++) {
        if (newGrid[row][col] === 0) {
          fullColumn = false;
          break;
        }
      }
      if (fullColumn) {
        columnsCleared++;
        for (let row = 0; row < BOARD_SIZE; row++) {
          newGrid[row].splice(col, 1);
          newGrid[row].unshift(0);
        }
      }
    }

    setGrid(newGrid);
    Alert.alert(`Cleared ${rowsCleared} rows and ${columnsCleared} columns!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <View
                key={cellIndex}
                style={[styles.cell, cell ? { backgroundColor: '#aaa' } : { backgroundColor: '#fff' }]}
              />
            ))}
          </View>
        ))}
        {currentBlock && position && (
          <Block
            shape={currentBlock.shape}
            orientation={currentBlock.orientation}
            color={currentBlock.color}
            position={position}
            isFixed={false}
            onDrag={(x, y) => {
              const boundedX = Math.max(0, Math.min(BOARD_SIZE - currentBlock.shape[0].length, x));
              const boundedY = Math.max(0, Math.min(BOARD_SIZE - currentBlock.shape.length, y));
              setPosition({ x: boundedX, y: boundedY });
            }}
            onRelease={(x, y) => {
              const boundedX = Math.max(0, Math.min(BOARD_SIZE - currentBlock.shape[0].length, x));
              const boundedY = Math.max(0, Math.min(BOARD_SIZE - currentBlock.shape.length, y));
              placeBlock(boundedX, boundedY);
            }}
          />
        )}
        {fixedBlocks.map((block, index) => (
          <Block
            key={index}
            shape={block.shape}
            orientation={block.orientation}
            color={block.color}
            position={block.position}
            isFixed={true}
            onDrag={() => {}}
            onRelease={() => {}}
          />
        ))}
      </View>
      <BlockSelector onSelect={(shape, color) => {
        setCurrentBlock({ shape, orientation: 0, color });
        setPosition({ x: Math.floor(BOARD_SIZE / 2) - Math.floor(shape[0].length / 2), y: -shape.length }); // Start outside the grid
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  grid: {
    position: 'relative',
    width: BOARD_SIZE * CELL_SIZE,
    height: BOARD_SIZE * CELL_SIZE,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 1,
    borderColor: '#999',
  },
});

export default Board;
