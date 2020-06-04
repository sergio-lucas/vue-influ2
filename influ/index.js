import { Influe } from './Influe'
import { Validate } from '../Validate'


export default {
    install (Vue, options) {
      const fields = {
          id: 'required'
      }
      Validate.options(options, fields)
        .then(() => {
            const { id } = options
            return new Influe(id)
        })
      .catch(error => console.error(error))
    }
  }