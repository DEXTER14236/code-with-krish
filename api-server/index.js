const express = require('express');
const { getMinNumber } = require(`../util`);
const{getMaxNumber}=require(`../util`);
const{getAvgNumber}=require(`../util`); 



const app = new express()
const port = 3000


            app.get('/number/min', (req, res) => 
                {
                const num1 = req.query.num1
                const num2 = req.query.num2

                const result = getMinNumber(num1, num2)

                res.status(result.status).json(result.data);
            })

            app.get('/number/max', (req, res) =>
                         {
                        const num1 = req.query.num1
                        const num2 = req.query.num2

                      const result = getMaxNumber(num1, num2)
                      res.status(result.status).json(result.data);
                    })

                        

                     app.get('/number/avg', (req, res) => {
                            
                            const num = req.query.num ? req.query.num.split(",").map(Number) : [];
                        
                            const result = getAvgNumber(num);
                        
                            res.status(result.status).json(result.data);
                    });


                    app.get('/number/assend', (req, res) => {
                        const num = req.query.num ? req.query.num.split(",").map(Number) : [];
                        
                        const result = accendingordr(num);
                    
                        res.status(result.status).json(result.data);
                    });





app.listen(port, () => {
    console.log(`server is running on ${port}`)

});

