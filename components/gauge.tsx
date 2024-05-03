import { cn } from '@/lib/utils'
import type { CSSProperties, SVGProps } from 'react'

export interface GaugeProps extends Omit<SVGProps<SVGSVGElement>, 'className'> {
  value: number
  size?: number | string
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
 * @param size = Width and height of the gauge. Defaults to 100%.
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
  size = '100%',
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

  const primaryStrokeDasharray = () => {
    if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
      // calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
      const subtract = -strokePercent + 100

      return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
    } else {
      const subtract = gapPercent * 2 * offsetFactor

      return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
    }
  }

  const secondaryStrokeDasharray = () => {
    if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
      // calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
      const subtract = strokePercent

      return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
    } else {
      const subtract = gapPercent * 2 * offsetFactorSecondary

      return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
    }
  }

  const primaryTransform = () => {
    if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
      // calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
      const add = 0.5 * (-strokePercent + 100)

      return `rotate(${-90 + add * percentToDegree}deg)`
    } else {
      const add = gapPercent * offsetFactor

      return `rotate(${-90 + add * percentToDegree}deg)`
    }
  }

  const secondaryTransform = () => {
    if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
      // calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
      const subtract = 0.5 * strokePercent

      return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`
    } else {
      const subtract = gapPercent * offsetFactorSecondary

      return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`
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

  const primaryOpacity = () => {
    if (
      offsetFactor > 0 &&
      strokePercent < gapPercent * 2 * offsetFactor &&
      strokePercent < gapPercent * 2 * offsetFactorSecondary
    ) {
      return 0
    } else return 1
  }

  const secondaryOpacity = () => {
    if (
      (offsetFactor === 0 && strokePercent > 100 - gapPercent * 2) ||
      (offsetFactor > 0 &&
        strokePercent > 100 - gapPercent * 2 * offsetFactor &&
        strokePercent > 100 - gapPercent * 2 * offsetFactorSecondary)
    ) {
      return 0
    } else return 1
  }

  const circleStyles: CSSProperties = {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDashoffset: 0,
    strokeWidth: strokeWidth,
    transition: `all ${transition?.length}ms ease ${transition?.delay}ms`,
    transformOrigin: '50% 50%',
    shapeRendering: 'geometricPrecision'
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${circleSize} ${circleSize}`}
      shapeRendering='crispEdges'
      width={size}
      height={size}
      style={{ userSelect: 'none' }}
      strokeWidth={2} // TODO: not needed?
      fill='none'
      className={cn('', typeof className === 'string' ? className : className?.svgClassName)}
      {...props}
    >
      {/*secondary*/}
      <circle
        cx={circleSize / 2}
        cy={circleSize / 2}
        r={radius}
        style={{
          ...circleStyles,
          strokeDasharray: secondaryStrokeDasharray(),
          transform: secondaryTransform(),
          stroke: secondaryStroke(),
          opacity: secondaryOpacity()
        }}
        className={cn('', typeof className === 'object' && className?.secondaryClassName)}
      />

      {/* primary */}
      <circle
        cx={circleSize / 2}
        cy={circleSize / 2}
        r={radius}
        style={{
          ...circleStyles,
          strokeDasharray: primaryStrokeDasharray(),
          transform: primaryTransform(),
          stroke: primaryStroke(),
          opacity: primaryOpacity()
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
          fill='currentColor'
          fontSize={36}
          className={cn('', typeof className === 'object' && className?.textClassName)}
        >
          {Math.round(strokePercent)}
        </text>
      )}
    </svg>
  )
}
