export function getGematriaArrayUpToLetter(hebrewLetter: string): {key: number , value: string}[] {
    const gematriaMap: { [key: string]: number } = {
      'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
      'י': 10, 'יא': 11, 'יב': 12, 'יג': 13, 'יד': 14, 'טו': 15, 'טז': 16, 'יז': 17,
      'יח': 18, 'יט': 19, 'כ': 20, 'כא': 21,'כב': 22, 'כג': 23, 'כד': 24, 'כה': 25,
      'כו': 26,'כז': 27, 'כח': 28, 'כט': 29, 'ל': 30
    };
  
    const gematriaArray: { key: number,value: string  }[] = [];
    let currentGematria = 0;
  
    for (const i in gematriaMap) {
        if (i === hebrewLetter) {
            currentGematria += gematriaMap[i];
            gematriaArray.push({  key: currentGematria,value: i });
            break;
        }
        currentGematria += gematriaMap[i];
        gematriaArray.push({  key: currentGematria , value: i});
    }
    return gematriaArray;
  }