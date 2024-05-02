import { GaugeProps } from '@/components/gauge'

export interface Examples {
  example: string
  props: GaugeProps
}

export const one: Examples[] = [
  {
    example: '1',
    props: {
      value: 18
    }
  },
  {
    example: '1',
    props: {
      value: 42
    }
  },
  {
    example: '1',
    props: {
      value: 66
    }
  },
  {
    example: '1',
    props: {
      value: 89.99
    }
  }
]

export const two: Examples[] = [
  {
    example: '2',
    props: {
      value: 24,
      primary: 'danger',
      secondary: 'danger'
    }
  },
  {
    example: '2',
    props: {
      value: 33,
      primary: 'warning',
      secondary: 'warning'
    }
  },
  {
    example: '2',
    props: {
      value: 55,
      primary: 'info',
      secondary: 'info'
    }
  },
  {
    example: '2',
    props: {
      value: 76,
      primary: 'success',
      secondary: 'success'
    }
  }
]

export const three: Examples[] = [
  {
    example: '3',
    props: {
      value: 15,
      primary: {
        0: 'var(--ds-pink-100)',
        10: 'var(--ds-pink-200)',
        20: 'var(--ds-pink-300)',
        30: 'var(--ds-pink-400)',
        50: 'var(--ds-pink-500)',
        60: 'var(--ds-pink-600)',
        70: 'var(--ds-pink-700)',
        80: 'var(--ds-pink-800)',
        90: 'var(--ds-pink-900)',
        100: 'var(--ds-pink-1000)'
      }
    }
  },
  {
    example: '3',
    props: {
      value: 55,
      primary: {
        0: 'var(--ds-pink-100)',
        10: 'var(--ds-pink-200)',
        20: 'var(--ds-pink-300)',
        30: 'var(--ds-pink-400)',
        50: 'var(--ds-pink-500)',
        60: 'var(--ds-pink-600)',
        70: 'var(--ds-pink-700)',
        80: 'var(--ds-pink-800)',
        90: 'var(--ds-pink-900)',
        100: 'var(--ds-pink-1000)'
      }
    }
  },
  {
    example: '3',
    props: {
      value: 70,
      primary: {
        0: 'var(--ds-pink-100)',
        10: 'var(--ds-pink-200)',
        20: 'var(--ds-pink-300)',
        30: 'var(--ds-pink-400)',
        50: 'var(--ds-pink-500)',
        60: 'var(--ds-pink-600)',
        70: 'var(--ds-pink-700)',
        80: 'var(--ds-pink-800)',
        90: 'var(--ds-pink-900)',
        100: 'var(--ds-pink-1000)'
      }
    }
  },
  {
    example: '3',
    props: {
      value: 88,
      primary: {
        0: 'var(--ds-pink-100)',
        10: 'var(--ds-pink-200)',
        20: 'var(--ds-pink-300)',
        30: 'var(--ds-pink-400)',
        50: 'var(--ds-pink-500)',
        60: 'var(--ds-pink-600)',
        70: 'var(--ds-pink-700)',
        80: 'var(--ds-pink-800)',
        90: 'var(--ds-pink-900)',
        100: 'var(--ds-pink-1000)'
      }
    }
  }
]

export const four: Examples[] = [
  {
    example: '4',
    props: {
      value: 75,
      equal: true,
      primary: {
        0: 'var(--ds-green-100)',
        10: 'var(--ds-green-200)',
        20: 'var(--ds-green-300)',
        30: 'var(--ds-green-400',
        50: 'var(--ds-green-500)',
        60: 'var(--ds-green-600)',
        70: 'var(--ds-green-700)',
        80: 'var(--ds-green-800)',
        90: 'var(--ds-green-900)',
        100: 'var(--ds-green-1000)'
      },
      secondary: {
        0: 'var(--ds-red-100)',
        10: 'var(--ds-red-200)',
        20: 'var(--ds-red-300)',
        30: 'var(--ds-red-400',
        50: 'var(--ds-red-500)',
        60: 'var(--ds-red-600)',
        70: 'var(--ds-red-700)',
        80: 'var(--ds-red-800)',
        90: 'var(--ds-red-900)',
        100: 'var(--ds-red-1000)'
      }
    }
  },
  {
    example: '4',
    props: {
      value: 60,
      equal: true,
      primary: {
        0: 'var(--ds-green-100)',
        10: 'var(--ds-green-200)',
        20: 'var(--ds-green-300)',
        30: 'var(--ds-green-400',
        50: 'var(--ds-green-500)',
        60: 'var(--ds-green-600)',
        70: 'var(--ds-green-700)',
        80: 'var(--ds-green-800)',
        90: 'var(--ds-green-900)',
        100: 'var(--ds-green-1000)'
      },
      secondary: {
        0: 'var(--ds-red-100)',
        10: 'var(--ds-red-200)',
        20: 'var(--ds-red-300)',
        30: 'var(--ds-red-400',
        50: 'var(--ds-red-500)',
        60: 'var(--ds-red-600)',
        70: 'var(--ds-red-700)',
        80: 'var(--ds-red-800)',
        90: 'var(--ds-red-900)',
        100: 'var(--ds-red-1000)'
      }
    }
  },
  {
    example: '4',
    props: {
      value: 40,
      equal: true,
      primary: {
        0: 'var(--ds-green-100)',
        10: 'var(--ds-green-200)',
        20: 'var(--ds-green-300)',
        30: 'var(--ds-green-400',
        50: 'var(--ds-green-500)',
        60: 'var(--ds-green-600)',
        70: 'var(--ds-green-700)',
        80: 'var(--ds-green-800)',
        90: 'var(--ds-green-900)',
        100: 'var(--ds-green-1000)'
      },
      secondary: {
        0: 'var(--ds-red-100)',
        10: 'var(--ds-red-200)',
        20: 'var(--ds-red-300)',
        30: 'var(--ds-red-400',
        50: 'var(--ds-red-500)',
        60: 'var(--ds-red-600)',
        70: 'var(--ds-red-700)',
        80: 'var(--ds-red-800)',
        90: 'var(--ds-red-900)',
        100: 'var(--ds-red-1000)'
      }
    }
  },
  {
    example: '4',
    props: {
      value: 25,
      equal: true,
      primary: {
        0: 'var(--ds-green-100)',
        10: 'var(--ds-green-200)',
        20: 'var(--ds-green-300)',
        30: 'var(--ds-green-400',
        50: 'var(--ds-green-500)',
        60: 'var(--ds-green-600)',
        70: 'var(--ds-green-700)',
        80: 'var(--ds-green-800)',
        90: 'var(--ds-green-900)',
        100: 'var(--ds-green-1000)'
      },
      secondary: {
        0: 'var(--ds-red-100)',
        10: 'var(--ds-red-200)',
        20: 'var(--ds-red-300)',
        30: 'var(--ds-red-400',
        50: 'var(--ds-red-500)',
        60: 'var(--ds-red-600)',
        70: 'var(--ds-red-700)',
        80: 'var(--ds-red-800)',
        90: 'var(--ds-red-900)',
        100: 'var(--ds-red-1000)'
      }
    }
  }
]
