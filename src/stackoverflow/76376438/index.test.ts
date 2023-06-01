describe('76376438', () => {
  it('should pass', () => {
    const clock = jasmine.clock();
    clock.install()

    const baseTime = new Date('2023-01-20T10:34:10.811');
    clock.mockDate(baseTime)

    const now = new Date().getTime();
    expect(now).toEqual(baseTime.getTime())
  })
})
