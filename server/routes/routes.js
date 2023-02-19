import {KFCModel} from '../Models/KfcModel.js'

export const addMenuToKfc = (req, res) => {

    const kfcData = new KFCModel(req.body);

    kfcData.save((err, data) => {
        if(err) {
            res.send(err)
        }
        res.send({
            status: 200,
            message: 'Data saved!!',
            data: data
        })
    })
}

export const getAllMenu = (req, res) => {
    const {page=1,limit=3}=req.query;
    KFCModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else {
            return res.send({
                status: 200,
                message: 'Data retrived!!',
                data: data
            })
        }
    }).limit(limit*1).skip((page-1)*limit);
}

export const getMenuById = (req, res) => {
    console.log(req.query);
    KFCModel.findOne({ identifier: req.query.identifier }, 
    (err, data) => {
        if(err){
            console.log(err);
        }
        else {
            if(!data) {
                return res.send('Please enter valid item')
            }
            return res.send({
                status: 200,
                message: 'Data retrived!!',
                data: [data]
            });
        }
    });

}

export const updateMenuById = (req, res) => {
    KFCModel.updateOne({identifier: req.query.identifier},{price: req.query.price}, (err, data) => {
        return res.send({
            status: 304,
            message: 'Data Updated!!',
            data: data
        });
    })
}

export const deleteMenuById = (req, res) => {
    KFCModel.deleteOne({identifier: req.query.identifier}, (err, data) => {
        return res.send({
            status: 200,
            message: 'Data deleted!!',
            data: data
        });
    })
}