/**
 * @name EventEmitter3
 * @refer https://github.com/primus/eventemitter3
 */

import EventEmitter3 from 'eventemitter3'

const events = new EventEmitter3()

export default events

/********************************************************
[사용법]

useEffect(() => {
  Events.addListener('event-test', (data) => {
    alert(JSON.stringify(data, null, 1))
  })
  return () => Events.removeListener('event-test')
}, [])

// * -------------------------------
Events.emit('event-test', { title: 'test', num: 365 })
*********************************************************/
