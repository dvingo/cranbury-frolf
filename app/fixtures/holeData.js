var hostname = 'https://s3.amazonaws.com/cranbury-park-map-images'
var imageMap = {
  name: 'Cranbury Park, Norwalk CT',
  url: hostname + '/cranbury_park_trail_map-50pc.jpg',
  height: 938,
  width: 1330
}
var holes = {
  hole1: {
    id: 'hole1',
    name: 'Hole 1',
    polyCoords: "312,561,292,560,283,568,280,576,283,590,292,597,307,598,336,597,367,596,401,596,421,591,426,583,423,567,408,558,385,556,373,560,361,557,353,558,371,545,375,533,374,527,374,521,369,518,362,514,355,511,345,511,336,525",
    images: [
      hostname + '/hole1Map.jpg',
      hostname + '/hole1Tee.jpg',
      hostname + '/hole1Tee2.jpg',
      hostname + '/hole1House.jpg',
      hostname + '/hole1Field.jpg'
    ]
  },
  hole2: {
    id: 'hole2',
    name: 'Hole 2',
    polyCoords: "407,377,397,378,389,388,388,404,387,419,388,547,400,553,415,550,419,545,422,536,424,497,426,401,424,382,415,378,415,377",
    images: [hostname + '/hole2Map.jpg']
  },
  hole3: {
    id: 'hole3',
    name: 'Hole 3',
    polyCoords: "387,332,370,332,362,344,348,367,333,394,326,399,312,408,287,426,271,435,263,448,266,458,276,466,282,468,298,461,323,447,352,426,365,414,382,383,394,368,398,349,398,337,390,339",
    images: [hostname + '/hole3Map2.jpg']
  },
  hole4: {
    id: 'hole4',
    name: 'Hole 4',
    polyCoords: "226,543,235,532,235,524,229,515,207,479,188,454,167,429,147,407,131,395,124,392,113,396,108,403,102,412,102,419,112,422,154,466,170,489,205,545",
    images: [
      hostname + '/hole4Map.jpg',
      hostname + '/hole4Tee.jpg',
      hostname + '/hole4Tee2.jpg'
    ]
  },
  hole5: {
    id: 'hole5',
    name: 'Hole 5',
    polyCoords: "92,429,78,419,71,412,72,399,73,386,73,379,67,364,59,341,59,333,67,322,76,321,76,300,83,285,91,282,94,282,103,282,107,288,113,296,113,307,113,329,112,361,112,382,112,395,103,407",
    images: [hostname + '/hole5Map.jpg']
  },
  hole6: {
    id: 'hole6',
    name: 'Hole 6',
    polyCoords: "161,330,170,310,182,292,201,279,219,267,252,258,270,246,275,232,271,222,262,218,255,214,231,222,198,236,173,252,149,274,136,291,128,307,124,323,130,337,149,342",
    images: [
      hostname + '/hole6Map.jpg',
      hostname + '/hole6Tee.jpg'
    ]
  },
  hole7: {
    id: 'hole7',
    name: 'Hole 7',
    polyCoords: "217,162,244,162,267,162,290,159,308,150,315,145,330,145,339,153,343,164,336,174,327,184,310,189,302,190,302,198,300,205,293,213,285,216,277,216,268,212,256,208,248,203,229,200,215,200,202,193,196,180,197,169,206,164",
    images: [
      hostname + '/hole7Map.jpg',
      hostname + '/hole7Tee.jpg'
    ]
  },
  hole8: {
    id: 'hole8',
    name: 'Hole 8',
    polyCoords: "366,198,381,198,389,205,398,213,410,226,418,241,423,260,423,276,420,296,420,307,412,316,400,317,390,317,384,312,384,294,386,276,385,259,378,243,366,233,357,222,357,205,357,202,361,200",
    images: [hostname + '/hole8Map.jpg']
  },
  hole9: {
    id: 'hole9',
    name: 'Hole 9',
    polyCoords: "441,258,449,251,452,241,448,226,437,206,434,189,437,183,445,173,447,159,442,148,431,143,421,144,420,147,410,141,402,141,390,147,380,150,380,154,383,171,388,191,394,206,404,219,416,232,420,246,423,260",
    images: [
      hostname + '/hole9Map.jpg',
      hostname + '/hole9Tee.jpg',
      hostname + '/hole9Tee2.jpg'
    ]
  },
  hole10: {
    id: 'hole10',
    name: 'Hole 10',
    polyCoords: "423,88,444,90,462,93,482,100,500,104,502,103,512,96,520,92,528,85,546,80,558,77,567,76,572,84,575,88,575,98,571,105,565,109,554,112,545,117,550,122,552,130,544,146,524,143,512,145,499,145,479,138,461,135,443,130,427,128,407,113,409,95",
    images: [
      hostname + '/hole10Map.jpg',
      hostname + '/hole10Tee.jpg',
      hostname + '/hole10Tee2.jpg',
      hostname + '/hole10Tee3.jpg',
      hostname + '/hole10Tee4.jpg',
      hostname + '/hole10Tee5.jpg'
    ]
  },
  hole11: {
    id: 'hole11',
    name: 'Hole 11',
    polyCoords: "539,147,548,153,553,170,557,185,557,192,557,197,562,200,571,205,578,210,585,216,592,224,592,228,582,231,575,232,568,237,563,242,563,248,563,253,568,263,568,267,562,277,551,282,546,282,538,281,533,274,531,266,530,246,529,228,526,215,521,205,520,191,517,179,514,169,514,159,517,146",
    images: [
      hostname + '/hole11Map.jpg',
      hostname + '/hole11Tee.jpg',
      hostname + '/hole11Tee2.jpg',
      hostname + '/hole11Tee3.jpg',
      hostname + '/hole11Tee4.jpg',
      hostname + '/hole11Tee5.jpg',
      hostname + '/hole11Tee6.jpg',
      hostname + '/hole11Tee7.jpg'
    ]
  },
  hole12: {
    id: 'hole12',
    name: 'Hole 12',
    polyCoords: "617,230,633,225,637,222,638,215,645,206,657,199,665,199,674,206,677,216,677,221,677,224,680,231,680,238,680,242,679,248,666,246,656,246,650,249,636,253,630,256,627,262,626,268,610,268,581,264,570,262,562,253,563,243,569,237,579,232,583,232,588,230,594,230,601,231,606,231",
    images: [
      hostname + '/hole12Map.jpg',
      hostname + '/hole12Map2.jpg',
      hostname + '/hole12Tee.jpg',
      hostname + '/hole12Tee2.jpg'
    ]
  },
  hole13: {
    id: 'hole13',
    name: 'Hole 13',
    polyCoords: "681,251,685,259,683,271,670,279,663,282,661,290,654,304,647,321,635,344,625,354,612,367,596,382,576,381,570,372,570,362,570,353,586,333,613,310,618,300,624,280,627,264,631,257,645,250,671,247,675,247",
    images: [
      hostname + '/hole13Map.jpg',
      hostname + '/hole13Tee.jpg',
      hostname + '/hole13Tee2.jpg',
      hostname + '/hole13Tee4.jpg'
    ]
  },
  hole14: {
    id: 'hole14',
    name: 'Hole 14',
    polyCoords: "628,491,635,477,633,467,620,456,593,435,573,415,551,396,543,387,536,387,528,390,522,395,516,403,515,408,519,420,527,426,546,440,579,460,590,474",
    images: [
      hostname + '/hole14Map.jpg',
      hostname + '/hole14Tee.jpg',
      hostname + '/hole14Tee2.jpg',
      hostname + '/hole14Tee3.jpg',
      hostname + '/hole14Tee4.jpg'
    ]
  },
  hole15: {
    id: 'hole15',
    name: 'Hole 15',
    polyCoords: "691,446,677,467,663,487,653,502,653,516,667,529,676,529,702,504,711,487,722,471,722,468,720,464,722,460,729,460,733,456,743,449,752,444,772,435,789,434,799,432,807,420,807,413,807,406,802,397,797,397,787,396,745,403,704,424",
    images: [
      hostname + '/hole15Map.jpg',
      hostname + '/hole15Map2.jpg',
      hostname + '/hole15Tee.jpg',
      hostname + '/hole15Tee2.jpg',
      hostname + '/hole15Tee3.jpg'
    ]
  },
  hole16: {
    id: 'hole16',
    name: 'Hole 16',
    polyCoords: "680,419,694,422,703,420,708,411,718,407,732,401,741,402,757,402,777,396,785,393,785,381,774,374,753,370,738,368,713,363,694,356,676,353,657,350,641,348,634,352,638,366,641,374,648,382,655,389,671,390,686,390,679,393,682,400,676,408",
    images: [
       hostname + '/hole16Fairway.jpg',
       hostname + '/hole16Map.jpg',
       hostname + '/hole16Tee.jpg',
       hostname + '/hole16Tee3.jpg'
    ]
  },
  hole17: {
    id: 'hole17',
    name: 'Hole 17',
    polyCoords: "634,354,626,354,618,363,618,372,621,399,632,446,638,473,644,489,655,493,664,486,670,477,675,469,675,460,670,447,677,445,681,444,691,438,694,430,694,423,685,420,678,418,676,409,674,403,662,398,656,391,645,387,644,379",
    images: [
      hostname + '/hole17Fairway.jpg',
      hostname + '/hole17Map.jpg',
      hostname + '/hole17Map2.jpg',
      hostname + '/hole17Tee.jpg',
      hostname + '/hole17Tee2.jpg',
      hostname + '/hole17Tee3.jpg',
      hostname + '/hole17Tee4.jpg',
      hostname + '/hole17Tee5.jpg'
    ]
  },
  hole18: {
    id: 'hole18',
    name: 'Hole 18',
    polyCoords: "",
    images: []
  },
}

module.exports = {
  holes: holes,
  imageMap: imageMap
}
