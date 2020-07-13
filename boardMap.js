const boardSize = 500;
const spacing = boardSize / 13;

const LudoMap = {
  squares: [{
    color: 'red',
    start: {
      x: 0,
      y: 0
    },
    size: 5,
    home: [{
      x: 1,
      y: 1
    }, {
      x: 1,
      y: 3
    }, {
      x: 3,
      y: 1
    }, {
      x: 3,
      y: 3
    }],
    players: [{
      isThere: true,
      icon: 'R1',
      location: {
        x: 1.5,
        y: 1.5
      }
    }, {
      isThere: true,
      icon: 'R2',
      location: {
        x: 1.5,
        y: 3.5
      }
    }, {
      isThere: true,
      icon: 'R3',
      location: {
        x: 3.5,
        y: 1.5
      }
    }, {
      isThere: true,
      icon: 'R4',
      location: {
        x: 3.5,
        y: 3.5
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
    home: [{
      x: 1,
      y: 9
    }, {
      x: 1,
      y: 11
    }, {
      x: 3,
      y: 9
    }, {
      x: 3,
      y: 11
    }],
    players: [{
      isThere: true,
      icon: 'Y1',
      location: {
        x: 1.5,
        y: 9.5
      }
    }, {
      isThere: true,
      icon: 'Y2',
      location: {
        x: 1.5,
        y: 11.5
      }
    }, {
      isThere: true,
      icon: 'Y3',
      location: {
        x: 3.5,
        y: 9.5
      }
    }, {
      isThere: true,
      icon: 'Y4',
      location: {
        x: 3.5,
        y: 11.5
      }
    }],
    stepStart: {
      x: 5,
      y: 11
    },
    stepFinal: [{
      x: 6,
      y: 8
    }, {
      x: 6,
      y: 9
    }, {
      x: 6,
      y: 10
    }, {
      x: 6,
      y: 11
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
    home: [{
      x: 9,
      y: 1
    }, {
      x: 11,
      y: 1
    }, {
      x: 9,
      y: 3
    }, {
      x: 11,
      y: 3
    }],
    players: [{
      isThere: true,
      icon: 'G1',
      location: {
        x: 9.5,
        y: 1.5
      }
    }, {
      isThere: true,
      icon: 'G2',
      location: {
        x: 11.5,
        y: 1.5
      }
    }, {
      isThere: true,
      icon: 'G3',
      location: {
        x: 9.5,
        y: 3.5
      }
    }, {
      isThere: true,
      icon: 'G4',
      location: {
        x: 11.5,
        y: 3.5
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
    home: [{
      x: 9,
      y: 9
    }, {
      x: 9,
      y: 11
    }, {
      x: 11,
      y: 9
    }, {
      x: 11,
      y: 11
    }],
    players: [{
      isThere: true,
      icon: 'B1',
      location: {
        x: 9.5,
        y: 9.5
      }
    }, {
      isThere: true,
      icon: 'B2',
      location: {
        x: 9.5,
        y: 11.5
      }
    }, {
      isThere: true,
      icon: 'B3',
      location: {
        x: 11.5,
        y: 9.5
      }
    }, {
      isThere: true,
      icon: 'B4',
      location: {
        x: 11.5,
        y: 11.5
      }
    }],
    stepStart: {
      x: 11,
      y: 7
    },
    stepFinal: [{
      x: 8,
      y: 6
    }, {
      x: 9,
      y: 6
    }, {
      x: 10,
      y: 6
    }, {
      x: 11,
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
  steps: {
    vertical: {
      x: [0, 1, 2, 3, 4, 8, 9, 10, 11, 12],
      y: [5, 6, 7]
    },
    horizontal: {
      x: [5, 6, 7],
      y: [0, 1, 2, 3, 4, 8, 9, 10, 11, 12]
    }
  }
}

//Steps : creating steps using above given co-ordinates, and then assigning them a particular id.