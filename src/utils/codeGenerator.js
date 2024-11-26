function generateRandomCode() {
    const hexSegment = () => Math.random().toString(16).slice(2, 6); // 4 caracteres hexadecimales
    const digitSegment = () => Math.floor(Math.random() * 10); // Un solo dígito
    
    // Combina los segmentos según el patrón
    return `${hexSegment()}${hexSegment()}-${hexSegment()}-${hexSegment()}-${digitSegment()}`;
  }
  
  module.exports = { generateRandomCode };
  