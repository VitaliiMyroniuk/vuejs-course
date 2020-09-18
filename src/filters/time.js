export default {
  toMinutes: value => {
    return value ? value + ' min' : ''
  },

  toYears: value => {
    return value ? value.substring(0, 4) : ''
  }
}
