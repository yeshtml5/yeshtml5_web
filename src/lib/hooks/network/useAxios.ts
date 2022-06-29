/**
 * @name useAxios
 * @description hooks기반 fetch
 */

import {useState} from 'react'
import axios from 'axios'

export const useAxios = (_url?: string, _options = {}) => {
  const [result, setResult] = useState<string>('') // *-------------- result
  const [loading, setLoading] = useState<boolean | null>(null) // *--------- Loading
  const [error, setError] = useState<any>(null) // *----------------- Error

  // *---------------- response
  async function response(_config: any) {
    setLoading(true)
    // const token = ''
    // const config = Object.assign({ headers: { Authorization: `Bearer ${token}` }, withCredentials: true, }, _config)
    const config = Object.assign({withCredentials: true}, _config)
    const res = await axios(config)
    setLoading(false)
    if (res?.status === 200) {
      // REST성공
      setResult(res?.data)
      return res?.data
    } else {
      // rest실패
      setError(res?.data)
      return {...res.data, result: 'fail'}
    }
  }
  // *---------------- Error 실행
  function errorFunc(error: any) {
    setLoading(false)
    setError(error)
    errorMsg({...(error as any)})
  }
  // *-------------------------------------- FETCH
  async function ajax(url?: string | null, params?: any) {
    const config = {method: 'GET', url: url || _url, ...params}
    try {
      return await response(config)
    } catch (error) {
      errorFunc(error)
    }
  }

  // *-------------------------------------- GET
  async function get(url?: string | null, params?: any) {
    const config = {method: 'GET', url: url || _url, params: Object.assign(_options, params)}
    try {
      return await response(config)
    } catch (error) {
      errorFunc(error)
    }
  }
  // *-------------------------------------- POST
  async function post(url?: string | null, data?: any) {
    const config = {method: 'POST', url: url || _url, data: Object.assign(_options, data)}
    try {
      return await response(config)
    } catch (error) {
      errorFunc(error)
    }
  }
  // *-------------------------------------- PUT
  async function put(url?: string | null, data?: any) {
    const config = {method: 'PUT', url: url || _url, data: Object.assign(_options, data)}
    try {
      return await response(config)
    } catch (error) {
      errorFunc(error)
    }
  }
  // *-------------------------------------- DELETE
  async function del(url?: string | null, data?: any) {
    const config = {method: 'DELETE', url: url || _url, data: Object.assign(_options, data)}
    try {
      return await response(config)
    } catch (error) {
      errorFunc(error)
    }
  }
  // *--------------------------------------
  return {result, ajax, get, post, del, put, loading, error}
}

/**
 * @description 에러발생시코드
 * @param error
 */
export const errorMsg = (...params: any) => {
  console.log('%c' + `[ajax ERROR] `, 'width:100%;font-size:12px;padding:5px 10px;color:#fff;background:red;')
  console.log(JSON.stringify(params, null, 1))
}
/********************************************************
[사용법]
  const { get, loading } = useFetch(`${USER}/community/join/board`, { offset: 0 });
  //*------- fetch
  async function fetch() {
    const res = await get()
    const res1 = await get(`${USER}/community/join/board/some`, { offset: 20 })
  }
  // useEffect
  useEffect(() => { fetch(); }, [])
  post, delete, put 일때 success, fail 체크는 
  if (res?.result === 'fail') {  }
  
  //-----------------------------------------------
  const { loading, ajax } = useAxios(url)
  async function fetch() {
    const res = await ajax(url,
      {
        params: { query: '컴퓨터' },
        headers: {
          'X-Naver-Client-Id': NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
        }
      }
    )
    setFetch(res)
  }

*********************************************************/
