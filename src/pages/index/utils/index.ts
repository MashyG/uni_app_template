export const formatList = list => {
  return list.reverse()
}
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('formatList', () => {
    const list = [1, 2, 3]
    expect(formatList(list)).toEqual([3, 2, 1])
  })
}
