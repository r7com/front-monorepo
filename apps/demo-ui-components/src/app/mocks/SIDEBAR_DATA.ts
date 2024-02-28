export const SIDEBAR_DATA = [
  {
    id: 1,
    category: 'destaques r7',
    data: [
      {
        id: 'item1',
        text: 'a fazenda',
        title: 'a fazenda',
        url: '#a fazenda',
        submenu: [
          { id: '1', url: '#politica', title: 'politica', text: 'politica' },
          { id: '2', url: '#esportes', title: 'esportes', text: 'esportes' },
          { id: '3', url: '#moda', title: 'moda', text: 'moda' },
          {
            id: '4',
            url: '#famosos',
            title: 'famosos',
            text: 'famosos',
            submenu: [
              { id: '6', url: '#keila', title: 'keila', text: 'keila' },
              { id: '7', url: '#odair', title: 'odair', text: 'odair' },
              { id: '38', url: '#lucas', title: 'lucas', text: 'lucas' },
            ],
          },
        ],
      },
      {
        id: 'item2',
        text: 'blogs',
        title: 'blogs',
        url: '#blogs',
        submenu: [
          { id: '10', url: '#moda', title: 'moda', text: 'moda' },
          { id: '20', url: '#famosos', title: 'famosos', text: 'famosos' },
        ],
      },
      {
        id: 'item3',
        text: 'esportes',
        title: 'esportes',
        url: '#esportes',
      },
    ],
  },
  {
    id: 2,
    category: 'institucional',
    data: [
      {
        id: 'item4',
        text: 'carreira',
        title: 'carreira',
        url: '#carreira',
      },
      {
        id: 'item5',
        text: 'grupo record',
        title: 'grupo record',
        url: '#grupo record',
        submenu: [
          { id: '16', url: '#banco', title: 'banco digi+', text: 'banco digi+' },
          { id: '26', url: '#radio', title: 'rádio sociedade', text: 'rádio sociedade' },
          { id: '36', url: '#entretenimento', title: 'entretenimento', text: 'entretenimento' },
          { id: '46', url: '#familia', title: 'rede familia', text: 'rede familia' },
        ],
      },
    ],
  },
]
