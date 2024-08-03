export const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F7C33E'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  export const getRandomShape = () => {
    const shapes = [
      { shape: [['1', '1'], ['1', '0']], color: '#888' }, // L Shape
      { shape: [['1', '1', '1'], ['0', '1', '0']], color: '#aaa' }, // T Shape
      { shape: [['1', '1', '1', '1']], color: '#ccc' },       // I Shape
    ];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };
  