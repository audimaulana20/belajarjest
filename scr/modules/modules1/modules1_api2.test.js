const request =  require("supertest")
const app = require("../server")

const expectResponse = expect.arrayContaining([
    expect.objectContaining({
        Column1: expect.any(Number),
        Column2: expect.any(Number),
    })
])


describe('tests pages', () => {
    it('test success find all', async () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expectResponse)
      }))
  })