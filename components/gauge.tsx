import { cn } from '@/lib/utils'
import type { SVGProps } from 'react'

export interface GaugeProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  value: number
  gapPercent?: number
  strokeWidth?: number
  equal?: boolean
  showValue?: boolean

  primary?: 'danger' | 'warning' | 'success' | 'info' | string | { [key: number]: string }
  secondary?: 'danger' | 'warning' | 'success' | 'info' | string | { [key: number]: string }

  transition?: {
    length?: number
    step?: number
    delay?: number
  }

  className?:
    | string
    | {
        svgClassName?: string
        primaryClassName?: string
        secondaryClassName?: string
        textClassName?: string
      }
}

/**
 * Renders a circular gauge using SVG. Allows configuration of colors, stroke, and animations.
 * @param value - Current value of the gauge, expressed as a percentage.
 * @param gapPercent -  Percentage of the total circumference that represents a gap in the gauge. Defaults to 5%.
 * @param strokeWidth - Stroke width of the gauge. Defaults to 10px.
 * @param equal - Determines if the gauge should have equal primary and secondary stroke lengths. Defaults to false.
 * @param showValue - Option to display the numeric value inside the gauge. Defaults to true.
 * @param primary - Primary color or set of colors for the gauge, with optional threshold values to determine color changes.
 * @param secondary - Secondary color or set of colors for the gauge, similar to `primary`.
 * @param transition - Transition settings for the gauge's animation, specifying the length, step, and delay of transitions.
 * @param className - Class names for different parts of the gauge, including the SVG container and individual elements.
 * @param props Configuration and properties for the svg.
 */
export function Gauge({
  value,
  gapPercent = 5,
  strokeWidth = 10,
  equal = false,
  showValue = true,

  primary,
  secondary,

  transition = {
    length: 1000, // ms
    step: 200, // ms
    delay: 0 // ms
  },

  className,

  ...props
}: GaugeProps) {
  const strokePercent = value // %

  const circleSize = 100 // px
  const radius = circleSize / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  const percentToDegree = 360 / 100 // deg
  const percentToPx = circumference / 100 // px

  const offsetFactor = equal ? 0.5 : 0
  const offsetFactorSecondary = 1 - offsetFactor

  const strokeDasharrayPrimary = () => {
    if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
      // calculation to gradually shift back to 0 offset as progress nears 100% (based on offset)
      const value =
        100 -
        (100 - gapPercent * 2 * offsetFactor) -
        (strokePercent - (100 - gapPercent * 2 * offsetFactor))

      return `${strokePercent * percentToPx - value * percentToPx} ${circumference}`
    } else {
      const value = gapPercent * 2 * offsetFactor

      return `${strokePercent * percentToPx - value * percentToPx} ${circumference}`
    }
  }

  const transformPrimary = () => {
    if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
      // calculation to gradually shift back to 0 offset as progress nears 100% (based on offset)
      const value =
        (100 -
          (100 - gapPercent * 2 * offsetFactor) -
          (strokePercent - (100 - gapPercent * 2 * offsetFactor))) *
        0.5

      return `rotate(${-90 + value * percentToDegree}deg)`
    } else {
      const value = gapPercent * offsetFactor

      return `rotate(${-90 + value * percentToDegree}deg)`
    }
  }

  const primaryStroke = () => {
    // Default red --> amber --> blue --> green
    if (!primary) {
      return strokePercent <= 25
        ? 'var(--ds-red-700)'
        : strokePercent <= 50
          ? 'var(--ds-amber-700)'
          : strokePercent <= 75
            ? 'var(--ds-blue-700)'
            : 'var(--ds-green-700)'
    }

    // Specific default color or custom color
    else if (typeof primary === 'string') {
      return primary === 'danger'
        ? 'var(--ds-red-700)'
        : primary === 'warning'
          ? 'var(--ds-amber-700)'
          : primary === 'info'
            ? 'var(--ds-blue-700)'
            : primary === 'success'
              ? 'var(--ds-green-700)'
              : primary
    }

    // Custom color range
    else if (typeof primary === 'object') {
      const primaryKeys = Object.keys(primary).sort((a, b) => Number(a) - Number(b))
      let primaryStroke = ''
      for (let i = 0; i < primaryKeys.length; i++) {
        const currentKey = Number(primaryKeys[i])
        const nextKey = Number(primaryKeys[i + 1])

        if (strokePercent >= currentKey && (strokePercent < nextKey || !nextKey)) {
          primaryStroke = primary[currentKey]

          if (['danger', 'warning', 'success', 'info'].includes(primaryStroke)) {
            if (primaryStroke === 'danger') {
              primaryStroke = 'var(--ds-red-700)'
            } else if (primaryStroke === 'warning') {
              primaryStroke = 'var(--ds-amber-700)'
            } else if (primaryStroke === 'info') {
              primaryStroke = 'var(--ds-blue-700)'
            } else if (primaryStroke === 'success') {
              primaryStroke = 'var(--ds-green-700)'
            }
          }

          break
        }
      }
      return primaryStroke
    }
  }

  const secondaryStroke = () => {
    // Default gray
    if (!secondary) {
      return 'hsl(var(--ds-gray-400))'
    }

    // Specific default color or custom color
    else if (typeof secondary === 'string') {
      return secondary === 'danger'
        ? 'var(--ds-red-100)'
        : secondary === 'warning'
          ? 'var(--ds-amber-100)'
          : secondary === 'info'
            ? 'var(--ds-blue-100)'
            : secondary === 'success'
              ? 'var(--ds-green-100)'
              : secondary
    }

    // Custom color range
    else if (typeof secondary === 'object') {
      const stroke_percent_secondary = 100 - strokePercent
      const secondaryKeys = Object.keys(secondary).sort((a, b) => Number(a) - Number(b))
      let secondaryStroke = ''

      for (let i = 0; i < secondaryKeys.length; i++) {
        const currentKey = Number(secondaryKeys[i])
        const nextKey = Number(secondaryKeys[i + 1])

        if (
          stroke_percent_secondary >= currentKey &&
          (stroke_percent_secondary < nextKey || !nextKey)
        ) {
          secondaryStroke = secondary[currentKey]

          if (['danger', 'warning', 'success', 'info'].includes(secondaryStroke)) {
            if (secondaryStroke === 'danger') {
              secondaryStroke = 'var(--ds-red-100)'
            } else if (secondaryStroke === 'warning') {
              secondaryStroke = 'var(--ds-amber-100)'
            } else if (secondaryStroke === 'info') {
              secondaryStroke = 'var(--ds-blue-100)'
            } else if (secondaryStroke === 'success') {
              secondaryStroke = 'var(--ds-green-100)'
            }
          }

          break
        }
      }
      return secondaryStroke
    }
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${circleSize} ${circleSize}`}
      shapeRendering='crispEdges'
      className={cn(
        'size-full select-none fill-none stroke-2',
        typeof className === 'string' ? className : className?.svgClassName
      )}
      {...props}
    >
      {/*secondary*/}
      <circle
        cx={circleSize / 2}
        cy={circleSize / 2}
        r={radius}
        style={{
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDashoffset: 0,
          strokeWidth: strokeWidth,
          strokeDasharray: `${Math.max((100 - strokePercent - gapPercent * 2 * offsetFactorSecondary) * percentToPx, 0)} ${circumference}`,
          transition: `all ${transition?.length}ms ease ${transition?.delay}ms`,
          transform: `rotate(${360 - 90 - gapPercent * percentToDegree * offsetFactorSecondary}deg) scaleY(-1)`,
          transformOrigin: '50% 50%',
          shapeRendering: 'geometricPrecision',
          stroke: secondaryStroke()
        }}
        className={cn(
          '',
          strokePercent > 100 - gapPercent * 2 && 'opacity-0', // Normal
          offsetFactor > 0 &&
            strokePercent <= 100 - gapPercent * 2 * offsetFactor &&
            strokePercent <= 100 - gapPercent * 2 * offsetFactorSecondary &&
            'opacity-100', // Arc priority
          typeof className === 'object' && className?.secondaryClassName
        )}
      />

      {/* primary */}
      <circle
        cx={circleSize / 2}
        cy={circleSize / 2}
        r={radius}
        style={{
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDashoffset: 0,
          strokeWidth: strokeWidth,
          strokeDasharray: strokeDasharrayPrimary(),
          transition: `all ${transition?.length}ms ease ${transition?.delay}ms`,
          transform: transformPrimary(),
          transformOrigin: '50% 50%',
          shapeRendering: 'geometricPrecision',
          stroke: primaryStroke()
        }}
        className={cn('', typeof className === 'object' && className?.primaryClassName)}
      />

      {showValue && (
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          alignmentBaseline='central'
          className={cn(
            'fill-current text-[36px]',
            typeof className === 'object' && className?.textClassName
          )}
        >
          {Math.round(strokePercent)}
        </text>
      )}
    </svg>
  )
}
