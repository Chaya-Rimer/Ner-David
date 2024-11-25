export function getGematriaArrayUpToLetter(hebrewLetter: string): { letter: string, gematria: number }[] {
    const gematriaMap: { [key: string]: number } = {
      'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
      'י': 10, 'יא': 11, 'יב': 12, 'יג': 13, 'יד': 14, 'טו': 15, 'טז': 16, 'יז': 17,
    };
  
    const gematriaArray: { letter: string, gematria: number }[] = [];
    let currentGematria = 0;
  
    for (const i in gematriaMap) {
        if (i === hebrewLetter) {
            currentGematria += gematriaMap[i];
            gematriaArray.push({ letter: i, gematria: currentGematria });
            break;
        }
        currentGematria += gematriaMap[i];
        gematriaArray.push({ letter: i, gematria: currentGematria });
    }
  
    return gematriaArray;
  }