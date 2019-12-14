export const matches =
  (regex: RegExp) =>
    (value?: string) =>
      value != null
        ? regex.test(value)
        : false
