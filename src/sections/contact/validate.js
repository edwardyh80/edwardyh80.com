export default ({ name, email, message }) => {
  const result = {
    name: {
      isEmpty: name.length === 0,
      isTooLong: name.length > 64,
    },
    email: {
      isEmpty: email.length === 0,
      isSyntaxInvalid: !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ),
      isTooLong: email.length > 256,
    },
    message: {
      isEmpty: message.length === 0,
      isLong: message.length >= 462,
      isTooLong: message.length > 512,
    },
  }
  for (const field in result) {
    result[field].isValid = Object.keys(result[field])
      .filter((x) => x !== "isLong")
      .map((x) => result[field][x])
      .every((x) => !x)
  }
  return result
}
