const request =  require("supertest")
const app = require("./modules2")

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
      .query({column1:1})
      .then((response) => {
        console.log(response.body);
        expect(response.body).toEqual(expectResponse)
      }))
  })