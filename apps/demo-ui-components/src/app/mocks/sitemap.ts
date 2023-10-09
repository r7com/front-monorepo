// arc menu data example
export const SITEMAP_DATA = {
  _website: 'r7',
  _id: '/',
  name: 'R7',
  node_type: 'section',
  children: [
    {
      _id: '/footer-sitemap',
      social: {
        twitter: null,
        instagram: null,
        facebook: null,
        rss: null,
      },
      site: {
        site_description: null,
        site_url: '',
        site_title: null,
        pagebuilder_path_for_native_apps: null,
        site_tagline: null,
        site_keywords: null,
        site_about: null,
      },
      site_topper: {
        site_logo_image: null,
      },
      navigation: {
        nav_title: '',
        menu_url: '',
      },
      _admin: {
        alias_ids: ['/footer-sitemap'],
      },
      _website: 'r7',
      name: 'Footer Sitemap',
      order: {
        'footer-sitemap': 1001,
      },
      parent: {
        default: '/',
        'footer-sitemap': '/',
      },
      ancestors: {
        default: [],
        'footer-sitemap': ['/'],
      },
      inactive: false,
      node_type: 'section',
      children: [
        {
          _id: '/footer-sitemap/column-1',
          social: {
            twitter: null,
            instagram: null,
            facebook: null,
            rss: null,
          },
          site: {
            site_description: null,
            site_url: null,
            site_title: null,
            pagebuilder_path_for_native_apps: null,
            site_tagline: null,
            site_keywords: null,
            site_about: null,
          },
          site_topper: {
            site_logo_image: null,
          },
          navigation: {
            nav_title: null,
            menu_url: null,
          },
          name: 'Column #1',
          _website: 'r7',
          parent: {
            default: '/footer-sitemap',
            'footer-sitemap': '/footer-sitemap',
          },
          ancestors: {
            default: ['/footer-sitemap'],
            'footer-sitemap': ['/', '/footer-sitemap'],
          },
          _admin: {
            alias_ids: ['/footer-sitemap/column-1'],
          },
          inactive: false,
          node_type: 'section',
          order: {
            'footer-sitemap': 2001,
          },
          children: [
            {
              _id: '/footer-sitemap/brasilia',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'BRASÍLIA',
                menu_url: 'https://noticias.r7.com/brasilia',
              },
              name: 'BRASÍLIA',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-1',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-1'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/brasilia'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3001,
              },
              children: [],
            },
            {
              _id: '/footer-sitemap/jr-24h',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'JR 24H',
                menu_url: 'https://noticias.r7.com/',
              },
              name: 'JR 24H',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-1',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-1'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/jr-24h'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3002,
              },
              children: [
                {
                  _id: 'link-FTOAUBYUJZDUNLMHHGUDHHMUJA',
                  _website: 'r7',
                  display_name: 'ECONOMIA',
                  url: 'https://noticias.r7.com/economia',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4001,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-LT2AT2GAXVAELAL27DNETVHJHI',
                  _website: 'r7',
                  display_name: 'IMPOSTO DE RENDA',
                  url: 'https://noticias.r7.com/economia/imposto-de-renda',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4002,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-4ATSNT6ZF5CBRPXBFIJOZDSXGQ',
                  _website: 'r7',
                  display_name: 'INTERCIONAL',
                  url: 'https://noticias.r7.com/internacional',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4003,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-A5SSL73HQFHZ5ALMZC4YXEVGLQ',
                  _website: 'r7',
                  display_name: 'RESUMO R7',
                  url: 'https://noticias.r7.com/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4004,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-ESASXHUMJZHHHIRRSJSTEVGYK4',
                  _website: 'r7',
                  display_name: 'TECNOLOGIA E CIÊNCIA',
                  url: 'https://noticias.r7.com/tecnologia-e-ciencia',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4005,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-XPV6ZMDBV5HWVGQMZPS7PFWROI',
                  _website: 'r7',
                  display_name: 'TECMUNDO',
                  url: 'https://www.tecmundo.com.br/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4006,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-EZJUXO4QEBAUDKWSDSJKCBXQLY',
                  _website: 'r7',
                  display_name: 'SAÚDE',
                  url: 'https://noticias.r7.com/saude',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4007,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-YHNXX3U5DVBENISOWBUZ53ZYZM',
                  _website: 'r7',
                  display_name: 'AGRONEGÓCIOS',
                  url: 'https://noticias.r7.com/agronegocios',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4008,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-ZCBDUO7SDJGITJPWJO3VW72Z5M',
                  _website: 'r7',
                  display_name: 'EDUCAÇÃO',
                  url: 'https://noticias.r7.com/educacao',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4009,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-EFQWVFUDVFEHNNKCR5HIEUZNCU',
                  _website: 'r7',
                  display_name: 'CARROS',
                  url: 'https://noticias.r7.com/carros',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4010,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-7PGH3NNKZJCVZP3ZZTWKJPQCBY',
                  _website: 'r7',
                  display_name: 'CONCURSOS',
                  url: 'https://noticias.r7.com/concursos',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4011,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-ZOP6KJ22Y5BTVACZANZIE3FP6M',
                  _website: 'r7',
                  display_name: 'CIDADES',
                  url: 'https://noticias.r7.com/cidades',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4012,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-Z4U3LR4LUBB57PZJKU6UEVQSRI',
                  _website: 'r7',
                  display_name: 'BRASÍLIA',
                  url: 'https://noticias.r7.com/brasilia',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4013,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-CXGBJGFADZBMLJXRKVAJZORKME',
                  _website: 'r7',
                  display_name: 'BRASIL',
                  url: 'https://noticias.r7.com/brasil',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4014,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-SVI7SWNF2FGZRIHOIAYAJ2ZLQY',
                  _website: 'r7',
                  display_name: 'SÃO PAULO',
                  url: 'https://noticias.r7.com/sao-paulo',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4015,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-F2HLCEIYVVB25OJXBJYWV2KPGY',
                  _website: 'r7',
                  display_name: 'RIO DE JANEIRO',
                  url: 'https://noticias.r7.com/rio-de-janeiro',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4016,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-NAOR6INNFJDWVJEEHO7D6VBUAU',
                  _website: 'r7',
                  display_name: 'MINAS GERAIS',
                  url: 'https://noticias.r7.com/minas-gerais',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4017,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-H2YNNVDOSFFVXAKTABHQSIWBXM',
                  _website: 'r7',
                  display_name: 'PERNAMBUCO',
                  url: 'https://noticias.r7.com/pernambuco',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4018,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-5ZXQLCWLP5BY7OERWRILYJYEB4',
                  _website: 'r7',
                  display_name: 'VACINÔMETRO',
                  url: 'https://noticias.r7.com/pernambuco',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/jr-24h',
                  },
                  order: {
                    'footer-sitemap': 4019,
                  },
                  node_type: 'link',
                  children: [],
                },
              ],
            },
            {
              _id: '/footer-sitemap/monitor7',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'MONITOR7',
                menu_url: 'https://monitor7.r7.com/',
              },
              name: 'MONITOR7',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-1',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-1'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/monitor7'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3003,
              },
              children: [],
            },
          ],
        },
        {
          _id: '/footer-sitemap/column-2',
          social: {
            twitter: null,
            instagram: null,
            facebook: null,
            rss: null,
          },
          site: {
            site_description: null,
            site_url: null,
            site_title: null,
            pagebuilder_path_for_native_apps: null,
            site_tagline: null,
            site_keywords: null,
            site_about: null,
          },
          site_topper: {
            site_logo_image: null,
          },
          navigation: {
            nav_title: null,
            menu_url: null,
          },
          name: 'Column #2',
          _website: 'r7',
          parent: {
            default: '/footer-sitemap',
            'footer-sitemap': '/footer-sitemap',
          },
          ancestors: {
            default: ['/footer-sitemap'],
            'footer-sitemap': ['/', '/footer-sitemap'],
          },
          _admin: {
            alias_ids: ['/footer-sitemap/column-2'],
          },
          inactive: false,
          node_type: 'section',
          order: {
            'footer-sitemap': 2002,
          },
          children: [
            {
              _id: '/footer-sitemap/entretenimento',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'ENTRETENIMENTO',
                menu_url: 'https://entretenimento.r7.com/',
              },
              name: 'ENTRETENIMENTO',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-2',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-2'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/entretenimento'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3001,
              },
              children: [
                {
                  _id: 'link-IHSAFRQBSZHRTCSIRSLDSILJLE',
                  _website: 'r7',
                  display_name: 'CINEMA',
                  url: 'https://entretenimento.r7.com/cinema-e-series',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/entretenimento',
                  },
                  order: {
                    'footer-sitemap': -5,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-7VO6DZ3QIFHMLLVRVRHSD2Y274',
                  _website: 'r7',
                  display_name: 'ESTRELANDO',
                  url: 'https://www.estrelando.com.br/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/entretenimento',
                  },
                  order: {
                    'footer-sitemap': -4,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-7O2VDEJF5FG5ZOKOUN4O7P5UXI',
                  _website: 'r7',
                  display_name: 'FAMOSOS E TV',
                  url: 'https://entretenimento.r7.com/famosos-e-tv',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/entretenimento',
                  },
                  order: {
                    'footer-sitemap': -3,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-EZHDMZOONREJBPD2TSJBYKOGOU',
                  _website: 'r7',
                  display_name: 'GAMES',
                  url: 'https://entretenimento.r7.com/games',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/entretenimento',
                  },
                  order: {
                    'footer-sitemap': -2,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-DBJOEXJMXZHVTF5RH2XCKASFBI',
                  _website: 'r7',
                  display_name: 'MÚSICA',
                  url: 'https://entretenimento.r7.com/musica',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/entretenimento',
                  },
                  order: {
                    'footer-sitemap': -1,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-3XNH47Z7HRAARPWG5FMAYBBKOE',
                  _website: 'r7',
                  display_name: 'VAGALUME',
                  url: 'https://www.vagalume.com.br/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/entretenimento',
                  },
                  order: {
                    'footer-sitemap': 0,
                  },
                  node_type: 'link',
                  children: [],
                },
              ],
            },
            {
              _id: '/footer-sitemap/r7-receitas',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'R7 RECEITAS',
                menu_url: 'https://receitas.r7.com/',
              },
              name: 'R7 RECEITAS',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-2',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-2'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/r7-receitas'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3002,
              },
              children: [],
            },
            {
              _id: '/footer-sitemap/hora-7',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'HORA 7',
                menu_url: 'https://hora7.r7.com/',
              },
              name: 'HORA 7',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-2',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-2'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/hora-7'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3003,
              },
              children: [
                {
                  _id: 'link-Z5PV7OS2URFHFBNYNF7CHEWJEM',
                  _website: 'r7',
                  display_name: 'MEGA CURIOSO',
                  url: 'https://www.megacurioso.com.br/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/hora-7',
                  },
                  order: {
                    'footer-sitemap': 0,
                  },
                  node_type: 'link',
                  children: [],
                },
              ],
            },
            {
              _id: '/footer-sitemap/r7-nitro',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'R7 NITRO',
                menu_url: 'https://nitro.r7.com/',
              },
              name: 'R7 NITRO',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-2',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-2'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/r7-nitro'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3004,
              },
              children: [
                {
                  _id: 'link-2H4EUWEVAVDBNFSQOTI6STIFCM',
                  _website: 'r7',
                  display_name: 'BAIXAKI',
                  url: 'https://www.baixaki.com.br/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/r7-nitro',
                  },
                  order: {
                    'footer-sitemap': 4001,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-PKY5GAZZU5EOXDAVWWCJKCU6CI',
                  _website: 'r7',
                  display_name: 'CLICK JOGOS',
                  url: 'https://www.clickjogos.com.br/',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/r7-nitro',
                  },
                  order: {
                    'footer-sitemap': 4002,
                  },
                  node_type: 'link',
                  children: [],
                },
              ],
            },
            {
              _id: '/footer-sitemap/renda-extra',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'RENDA EXTRA',
                menu_url: 'https://renda-extra.r7.com/',
              },
              name: 'RENDA EXTRA',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-2',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-2'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/renda-extra'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3005,
              },
              children: [
                {
                  _id: 'link-3RB6DY24OZEJ7O4245PSEHEDGM',
                  _website: 'r7',
                  display_name: 'MINHA HISTÓRIA',
                  url: 'https://renda-extra.r7.com/minha-historia',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/renda-extra',
                  },
                  order: {
                    'footer-sitemap': -2,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-QTEJRYENRNDRHIMYLP2K4XRFKM',
                  _website: 'r7',
                  display_name: 'SEU BOLSO',
                  url: 'https://renda-extra.r7.com/seu-bolso',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/renda-extra',
                  },
                  order: {
                    'footer-sitemap': -1,
                  },
                  node_type: 'link',
                  children: [],
                },
                {
                  _id: 'link-FW2P325HLRG6PJ63RU77HNRFKE',
                  _website: 'r7',
                  display_name: 'PROFISSIONALIZE-SE',
                  url: 'https://renda-extra.r7.com/profissionalize-se',
                  parent: {
                    'footer-sitemap': '/footer-sitemap/renda-extra',
                  },
                  order: {
                    'footer-sitemap': 0,
                  },
                  node_type: 'link',
                  children: [],
                },
              ],
            },
            {
              _id: '/footer-sitemap/rpet',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'RPET',
                menu_url: 'https://rpet.r7.com/',
              },
              name: 'RPET',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-2',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-2'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/rpet'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3006,
              },
              children: [],
            },
          ],
        },
        {
          _id: '/footer-sitemap/column-3',
          social: {
            twitter: null,
            instagram: null,
            facebook: null,
            rss: null,
          },
          site: {
            site_description: null,
            site_url: null,
            site_title: null,
            pagebuilder_path_for_native_apps: null,
            site_tagline: null,
            site_keywords: null,
            site_about: null,
          },
          site_topper: {
            site_logo_image: null,
          },
          navigation: {
            nav_title: null,
            menu_url: null,
          },
          name: 'Column #3',
          _website: 'r7',
          parent: {
            default: '/footer-sitemap',
            'footer-sitemap': '/footer-sitemap',
          },
          ancestors: {
            default: ['/footer-sitemap'],
            'footer-sitemap': ['/', '/footer-sitemap'],
          },
          _admin: {
            alias_ids: ['/footer-sitemap/column-3'],
          },
          inactive: false,
          node_type: 'section',
          order: {
            'footer-sitemap': 2003,
          },
          children: [
            {
              _id: '/footer-sitemap/esportes',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'ESPORTES',
                menu_url: 'https://esportes.r7.com/',
              },
              name: 'ESPORTES',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-3',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-3'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/esportes'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3001,
              },
              children: [],
            },
            {
              _id: '/footer-sitemap/viva-a-vida',
              social: {
                twitter: null,
                instagram: null,
                facebook: null,
                rss: null,
              },
              site: {
                site_description: null,
                site_url: null,
                site_title: null,
                pagebuilder_path_for_native_apps: null,
                site_tagline: null,
                site_keywords: null,
                site_about: null,
              },
              site_topper: {
                site_logo_image: null,
              },
              navigation: {
                nav_title: 'VIVA A VIDA',
                menu_url: 'https://vivaavida.r7.com/',
              },
              name: 'VIVA A VIDA',
              _website: 'r7',
              parent: {
                default: '/footer-sitemap',
                'footer-sitemap': '/footer-sitemap/column-3',
              },
              ancestors: {
                default: ['/footer-sitemap'],
                'footer-sitemap': ['/', '/footer-sitemap', '/footer-sitemap/column-3'],
              },
              _admin: {
                alias_ids: ['/footer-sitemap/viva-a-vida'],
              },
              inactive: false,
              node_type: 'section',
              order: {
                'footer-sitemap': 3002,
              },
              children: [],
            },
          ],
        },
        {
          _id: '/footer-sitemap/column-4',
          social: {
            twitter: null,
            instagram: null,
            facebook: null,
            rss: null,
          },
          site: {
            site_description: null,
            site_url: null,
            site_title: null,
            pagebuilder_path_for_native_apps: null,
            site_tagline: null,
            site_keywords: null,
            site_about: null,
          },
          site_topper: {
            site_logo_image: null,
          },
          navigation: {
            nav_title: null,
            menu_url: null,
          },
          name: 'Column #4',
          _website: 'r7',
          parent: {
            default: '/footer-sitemap',
            'footer-sitemap': '/footer-sitemap',
          },
          ancestors: {
            default: ['/footer-sitemap'],
            'footer-sitemap': ['/', '/footer-sitemap'],
          },
          _admin: {
            alias_ids: ['/footer-sitemap/column-4'],
          },
          inactive: false,
          node_type: 'section',
          order: {
            'footer-sitemap': 2004,
          },
          children: [],
        },
        {
          _id: '/footer-sitemap/column-5',
          social: {
            twitter: null,
            instagram: null,
            facebook: null,
            rss: null,
          },
          site: {
            site_description: null,
            site_url: null,
            site_title: null,
            pagebuilder_path_for_native_apps: null,
            site_tagline: null,
            site_keywords: null,
            site_about: null,
          },
          site_topper: {
            site_logo_image: null,
          },
          navigation: {
            nav_title: null,
            menu_url: null,
          },
          name: 'Column #5',
          _website: 'r7',
          parent: {
            default: '/footer-sitemap',
            'footer-sitemap': '/footer-sitemap',
          },
          ancestors: {
            default: ['/footer-sitemap'],
            'footer-sitemap': ['/', '/footer-sitemap'],
          },
          _admin: {
            alias_ids: ['/footer-sitemap/column-5'],
          },
          inactive: false,
          node_type: 'section',
          order: {
            'footer-sitemap': 2005,
          },
          children: [],
        },
        {
          _id: '/footer-sitemap/column-6',
          social: {
            twitter: null,
            instagram: null,
            facebook: null,
            rss: null,
          },
          site: {
            site_description: null,
            site_url: null,
            site_title: null,
            pagebuilder_path_for_native_apps: null,
            site_tagline: null,
            site_keywords: null,
            site_about: null,
          },
          site_topper: {
            site_logo_image: null,
          },
          navigation: {
            nav_title: null,
            menu_url: null,
          },
          name: 'Column #6',
          _website: 'r7',
          parent: {
            default: '/footer-sitemap',
            'footer-sitemap': '/footer-sitemap',
          },
          ancestors: {
            default: ['/footer-sitemap'],
            'footer-sitemap': ['/', '/footer-sitemap'],
          },
          _admin: {
            alias_ids: ['/footer-sitemap/column-6'],
          },
          inactive: false,
          node_type: 'section',
          order: {
            'footer-sitemap': 2006,
          },
          children: [],
        },
      ],
    },
  ],
}
