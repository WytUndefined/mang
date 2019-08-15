/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return /^[a-zA-Z][a-zA-Z0-9_]{3,}$/.test(str)
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 数字验证
 * @param rule
 * @param value
 * @param callback
 * @param source
 * @param options
 */
export function validNumber(rule, value, callback, source, options) {
  if (!rule.required && !value) {
    callback()
  }
  if (!value) {
    callback(new Error(options.messages))
  }
  value = Number(value)
  if (typeof value === 'number' && !isNaN(value) && value >= 0) {
    value = value + ''
    if (value.indexOf('.') === -1 || (value.indexOf('.') !== -1 && value.substring(value.indexOf('.'), value.length).length <= 3)) {
      callback()
    } else {
      callback(new Error(options.messages))
    }
  } else {
    callback(new Error(options.messages))
  }
}

/**
 * 电话
 * @param {string} str
 * @returns {Boolean}
 */
export function validPhone(rule, value, callback, source, options) {
  if (!rule.required && !value) {
    callback()
  }
  if (!value) {
    callback(new Error(options.messages))
  }
  const mobileReg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/
  const telPhoneReg = /^\d{3}-\d{8}|\d{4}-\{7,8}$/
  if (mobileReg.test(value) || telPhoneReg.test(value)) {
    callback()
  } else {
    callback(new Error(options.messages))
  }
}

/**
 * 手机号码
 * @param {string} str
 * @returns {Boolean}
 */
export function validMobilePhone(rule, value, callback, source, options) {
  if (!rule.required && !value) {
    callback()
  }
  if (!value) {
    callback(new Error(options.messages))
  }
  const mobileReg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/
  if (mobileReg.test(value)) {
    callback()
  } else {
    callback(new Error(options.messages))
  }
}

/**
 * 固定电话
 * @param {string} str
 * @returns {Boolean}
 */
export function validTelPhone(rule, value, callback, source, options) {
  if (!rule.required && !value) {
    callback()
  }
  if (!value) {
    callback(new Error(options.messages))
  }
  const telPhoneReg = /^\d{3}-\d{8}|\d{4}-\{7,8}$/
  if (telPhoneReg.test(value)) {
    callback()
  } else {
    callback(new Error(options.messages))
  }
}

/**
 * 身份证号码
 * @param {string} str
 * @returns {Boolean}
 */
export function validIdNumber(rule, value, callback, source, options) {
  if (!rule.required && !value) {
    callback()
  }
  if (!value) {
    callback(new Error(options.messages))
  }
  const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(options.messages))
  }
}

/**
 * 账号
 * @param {string} str
 * @returns {Boolean}
 */
export function validAccount(rule, value, callback, source, options) {
  if (!rule.required && !value) {
    callback()
  }
  if (!value) {
    callback(new Error(options.messages))
  }
  if (validUsername(value)) {
    callback()
  } else {
    callback(new Error(options.messages))
  }
}

/**
 * 是否为空判断
 */
export function validateNull(val) {
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '') return true
    return false
  }
  return false
}
