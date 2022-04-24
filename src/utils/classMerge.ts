const classMerge = (...classes: (string | undefined | false | null)[]) => {
  return [...classes].filter((val) => val).join(' ')
}

export default classMerge
