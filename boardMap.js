const boardSize = 500;
const spacing = boardSize / 13;
const COMMON = 'COMMON';
const START = 'START';
const FINAL = 'FINAL';
const END = 'END';

const LudoMap = {
  squares: [{
    color: 'red',
    start: {
      x: 0,
      y: 0
    },
    size: 5,
    players: [{
      isThere: true,
      icon: 'R1',
      location: {
        x: 1.5,
        y: 1.5
      },
      home: {
        x: 1,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'R2',
      location: {
        x: 1.5,
        y: 3.5
      },
      home: {
        x: 1,
        y: 3
      }
    }, {
      isThere: true,
      icon: 'R3',
      location: {
        x: 3.5,
        y: 1.5
      },
      home: {
        x: 3,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'R4',
      location: {
        x: 3.5,
        y: 3.5
      },
      home: {
        x: 3,
        y: 3
      }
    }],
    stepStart: {
      x: 1,
      y: 5
    },
    stepFinal: [{
      x: 1,
      y: 6
    }, {
      x: 2,
      y: 6
    }, {
      x: 3,
      y: 6
    }, {
      x: 4,
      y: 6
    }],
    final: {
      x: 5,
      y: 6
    }
  }, {
    color: 'yellow',
    start: {
      x: 0,
      y: 8
    },
    size: 5,
    players: [{
      isThere: true,
      icon: 'Y1',
      location: {
        x: 1.5,
        y: 9.5
      },
      home: {
        x: 1,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'Y2',
      location: {
        x: 1.5,
        y: 11.5
      },
      home: {
        x: 1,
        y: 11
      }
    }, {
      isThere: true,
      icon: 'Y3',
      location: {
        x: 3.5,
        y: 9.5
      },
      home: {
        x: 3,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'Y4',
      location: {
        x: 3.5,
        y: 11.5
      },
      home: {
        x: 3,
        y: 11
      }
    }],
    stepStart: {
      x: 5,
      y: 11
    },
    stepFinal: [{
      x: 6,
      y: 11
    }, {
      x: 6,
      y: 10
    }, {
      x: 6,
      y: 9
    }, {
      x: 6,
      y: 8
    }],
    final: {
      x: 6,
      y: 7
    }
  }, {
    color: 'green',
    start: {
      x: 8,
      y: 0
    },
    size: 5,
    players: [{
      isThere: true,
      icon: 'G1',
      location: {
        x: 9.5,
        y: 1.5
      },
      home: {
        x: 9,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'G2',
      location: {
        x: 11.5,
        y: 1.5
      },
      home: {
        x: 11,
        y: 1
      }
    }, {
      isThere: true,
      icon: 'G3',
      location: {
        x: 9.5,
        y: 3.5
      },
      home: {
        x: 9,
        y: 3
      }
    }, {
      isThere: true,
      icon: 'G4',
      location: {
        x: 11.5,
        y: 3.5
      },
      home: {
        x: 11,
        y: 3
      }
    }],
    stepStart: {
      x: 7,
      y: 1
    },
    stepFinal: [{
      x: 6,
      y: 1
    }, {
      x: 6,
      y: 2
    }, {
      x: 6,
      y: 3
    }, {
      x: 6,
      y: 4
    }],
    final: {
      x: 6,
      y: 5
    }
  }, {
    color: 'blue',
    start: {
      x: 8,
      y: 8
    },
    size: 5,
    players: [{
      isThere: true,
      icon: 'B1',
      location: {
        x: 9.5,
        y: 9.5
      },
      home: {
        x: 9,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'B2',
      location: {
        x: 9.5,
        y: 11.5
      },
      home: {
        x: 9,
        y: 11
      }
    }, {
      isThere: true,
      icon: 'B3',
      location: {
        x: 11.5,
        y: 9.5
      },
      home: {
        x: 11,
        y: 9
      }
    }, {
      isThere: true,
      icon: 'B4',
      location: {
        x: 11.5,
        y: 11.5
      },
      home: {
        x: 11,
        y: 11
      }
    }],
    stepStart: {
      x: 11,
      y: 7
    },
    stepFinal: [{
      x: 11,
      y: 6
    }, {
      x: 10,
      y: 6
    }, {
      x: 9,
      y: 6
    }, {
      x: 8,
      y: 6
    }],
    final: {
      x: 7,
      y: 6
    }
  }],
  center: {
    start: {
      x: 5,
      y: 5
    },
    end: {
      x: 7,
      y: 7
    }
  },
  steps: [
    {
      x: 0,
      y: 5
    },
    {
      x: 1,
      y: 5
    },
    {
      x: 2,
      y: 5
    },
    {
      x: 3,
      y: 5
    },
    {
      x: 4,
      y: 5
    },
    {
      x: 5,
      y: 4
    },
    {
      x: 5,
      y: 3
    },
    {
      x: 5,
      y: 2
    },
    {
      x: 5,
      y: 1
    },
    {
      x: 5,
      y: 0
    },
    {
      x: 6,
      y: 0
    },
    {
      x: 7,
      y: 0
    },
    {
      x: 7,
      y: 1
    },
    {
      x: 7,
      y: 2
    },
    {
      x: 7,
      y: 3
    },
    {
      x: 7,
      y: 4
    },
    {
      x: 8,
      y: 5
    },
    {
      x: 9,
      y: 5
    },
    {
      x: 10,
      y: 5
    },
    {
      x: 11,
      y: 5
    },
    {
      x: 12,
      y: 5
    },
    {
      x: 12,
      y: 6
    },
    {
      x: 12,
      y: 7
    },
    {
      x: 11,
      y: 7
    },
    {
      x: 10,
      y: 7
    },
    {
      x: 9,
      y: 7
    },
    {
      x: 8,
      y: 7
    },
    {
      x: 7,
      y: 8
    },
    {
      x: 7,
      y: 9
    },
    {
      x: 7,
      y: 10
    },
    {
      x: 7,
      y: 11
    },
    {
      x: 7,
      y: 12
    },
    {
      x: 6,
      y: 12
    },
    {
      x: 5,
      y: 12
    },
    {
      x: 5,
      y: 11
    },
    {
      x: 5,
      y: 10
    },
    {
      x: 5,
      y: 9
    },
    {
      x: 5,
      y: 8
    },
    {
      x: 4,
      y: 7
    },
    {
      x: 3,
      y: 7
    },
    {
      x: 2,
      y: 7
    },
    {
      x: 1,
      y: 7
    },
    {
      x: 0,
      y: 7
    },
    {
      x: 0,
      y: 6
    }
    ],
  safeSteps: [1, 7, 12, 18, 23, 29, 34, 40],
}

//Steps : creating steps using above given co-ordinates, and then assigning them a particular id.


/*
Path: {
  start: location, 
  steps[]: list of all steps,
  final[]: list of final steps,
  end: end loaction
}


Steps:
  - count
  - type
  - safe
  - occupancy


Path : {
  red: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, .... 48],
  green: [12, 13, 14, 15, ..., 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 44, 45, 46, 47, 48],
  yellow: [34, 35, 36, ..., 43, 0, 1, 2, ..., 32, 44, 45, 46, 47, 48],
  blue: [23, 24, 25, ..., 43, 0, 1, ..., 21, 44, 45, 46, 47, 48],
}
  
  
*/
