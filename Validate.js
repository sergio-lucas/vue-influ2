export class Validate {
    static options (options = {}, validate_params = {}) {
      // Validate parameter
      const result = [],
            keys = Object.keys(options),
            validate_fields = Object.entries(validate_params);

        validate_fields.map((field) => {
            let [key, val] = field
            if (val === 'required' && !keys.includes(key)) result.push(Promise.reject(Error(`Field ${key} is required`)))
        })
      return Promise.all(result)
    }
  }