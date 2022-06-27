/**
 * @reference https://blog.bitsrc.io/coloring-your-terminal-using-nodejs-eb647d4af2a2
 * @param message {string || object} 로그메시지
 * @param color_setting {array} 색상컬러값
 */
export const log = (message: string | object | number | boolean | undefined, color_setting: string[] = ['91m', '39m']) => {
  if (!message) return
  const COLOR_SETTING = color_setting
  switch (typeof message) {
    case 'string':
      console.log(`\x1b[${COLOR_SETTING[0]}${message}\x1b[${COLOR_SETTING[1]}`)
      //console.log(colors.red(message))
      break
    case 'object':
      console.log(`\x1b[${COLOR_SETTING[0]}${JSON.stringify(message, null, 2)}\x1b[${COLOR_SETTING[1]}`)
      break
    default:
      console.log(`\x1b[${COLOR_SETTING[0]}${message}\x1b[${COLOR_SETTING[1]}`)
      break
  }
}
/**
 * trace
 * @param message
 */

export const line = () => {
  const message = '-------------------------'
  console.log(`\x1b[36m ${message}\x1b[89m`)
}

export const error = (message: string | object | undefined) => {
  if (!message) return
  log(message, ['31m', '89m'])
}

// 디버그화면
export const debug = (message: any) => {
  return (
    <div className="debug" style={{padding: 5, border: '2px dotted black', backgroundColor: 'olive'}}>
      <p>typeof: {typeof message}</p>
      {JSON.stringify(message, null, 1)}
    </div>
  )
}
