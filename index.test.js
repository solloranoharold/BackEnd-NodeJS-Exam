const { INTEGER } = require("sequelize");
const request = require("supertest");
const app = require("./routes/user");
// const login = require("./routes/login");


describe("User Data ", () => {
    it('user side' ,async()=>{ 
        request(app)
        .get('/')
        .expect('Content-Type',/json/)
        .expect(200)
        .then(response=>{ 
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        msg:expect.any(String)
                    })
                ])
            )
        })
        
    })

    it('POST user data (create)' ,async()=>{ 
         request(app)
        .post('/registerUser')
        .expect('Content-Type',/json/)
        .expect(200)
        .then(response=>{ 
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        msg:expect.any(String)
                    })
                ])
            )
        })
    })
    it('POST user data (update)' ,async()=>{ 
        request(app)
       .post('/updateUser')
       .expect('Content-Type',/json/)
       .expect(200)
       .then(response=>{ 
           expect(response.body).toEqual(
               expect.arrayContaining([
                   expect.objectContaining({
                       msg:expect.any(String)
                   })
               ])
           )
       })
   })
   it('POST user data (delete)' ,async()=>{ 
    request(app)
   .post('/deleteUser')
   .expect('Content-Type',/json/)
   .expect(200)
    .then(response=>{ 
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    msg:expect.any(String)
                })
            ])
        )
    })
    })
    it('POST user data (multiple delete )' ,async()=>{ 
        request(app)
       .post('/deleteMultipleUser')
       .expect('Content-Type',/json/)
       .expect(200)
        .then(response=>{ 
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        msg:expect.any(String)
                    })
                ])
            )
        })
    })

    it('GET user data ' ,async()=>{ 
        request(app)
       .get('/getAllUser')
       .expect('Content-Type',/json/)
       .expect(200)
        .then(response=>{ 
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id:expect.any(INTEGER)
                    })
                ])
            )
        })
    })
});

describe('Login',()=>{ 
    
})
