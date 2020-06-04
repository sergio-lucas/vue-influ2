export class Influe {
    constructor (id) {
      // Code snippet
      (function (w, d, s, a, r) {
        w.settings = {
          infl_id: id,
        }
        a = d.getElementsByTagName('head')[0]
        r = d.createElement('script'); r.async = 1
        r.src = s + w.settings.infl_id
        a.appendChild(r)
      })(
        window,
        document,
        'https://www.influ2.com/tracker?clid='
      )
    }
  }