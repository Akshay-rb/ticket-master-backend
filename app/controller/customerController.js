const Customer = require('../model/customer')

module.exports.welcome =(req,res)=>{
    res.json({
        notice:'welcome to ticket master app'
    })
}

module.exports.list = (req,res)=>{
    Customer.find()
            .then((customers)=>{
                if(customers){
                    res.json(customers)
                }else{
                    res.json({})
                }
            })
            .catch((error)=>{
                res.json(error)
            })
}

module.exports.show =(req,res)=>{
    const { id } = req.params
    Customer.findById(id)
            .then((customer)=>{
                if(customer){
                    res.json(customer)
                }else{
                    res.json({})
                }
            })
            .catch((error)=>{
                res.json(error)
            })
}

module.exports.create =(req,res)=>{
    const { body } = req
    const customer = new Customer(body)

    customer.save()
            .then((customer)=>{
                res.json(customer)
            })
            .catch((error)=>{
                res.json(error)
            })
}

module.exports.update = (req,res)=>{
    const {id} = req.params
    const {body} = req
    Customer.findByIdAndUpdate(id,body,{new:true, runValidators:true})
            .then((customer)=>{
                if(customer){
                    res.json(customer)
                }else{
                    res.json({})
                }
            })
            .catch((err)=>{
                res.json(err)
            })
}

module.exports.destroy =(req,res)=>{
    const {id} = req.params
    Customer.findByIdAndDelete(id)
            .then((customer)=>{
                if(customer){
                    res.json(customer)
                }else{
                    res.json({})
                }
            })
            .catch((error)=>{
                res.json(error)
            })
}

