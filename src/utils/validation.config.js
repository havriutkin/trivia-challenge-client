export const signInFormConstraints = {
    username: {
        presence: {
            allowEmpty: false,
            message: 'is required'
        }
    },
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      length: {
        minimum: 8,
        message: "must be at least 8 characters"
      }
    }
};

export const logInFormConstaints = {
    username: {
      presence: {
          allowEmpty: false,
          message: 'is required'
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 8,
        message: "must be at least 8 characters"
      }
    }
}
  