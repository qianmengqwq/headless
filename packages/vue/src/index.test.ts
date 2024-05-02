import { describe, expect, it } from 'vitest'
import { add } from './index'

describe('测试', () => {
  it('函数返回值', () => {
    expect(add(1, 2)).toBe(3)
  })
})
