import { getDB } from "./getDB";

const input = { _id: '03060bb5-7c19-42d7-9f6b-7bbc72b85110',
      _rev: '6-14dd4c70cc2445238872802484d8ca41',
      dePart: 'Ein Tropfen Liebe ist mehr als ein Ozean an Wille und Verstand.',
      deWord: 'der Tropfen',
      enPart: 'A drop of love is more than an ocean of will and understanding.',
      enWord: 'drop, tear',
      imageSrcOrigin: 'https://img00.deviantart.net/551f/i/2006/224/6/a/drops_of_blood_by_b_sick.jpg',
      imageSrc: 'https://i.imgur.com/MQt16IA.jpg',
      altTag: 'will than ocean love' }
 
  const x = getDB({
    db: [input],
    fromLanguage:'BG',
    toLanguage:'EN'
  })    
  console.log(x);