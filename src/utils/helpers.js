export const decodeHTMLEntities = text => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

export const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index lower than i
        const j = Math.floor(Math.random() * (i + 1));
    
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
      }
    return array;
}