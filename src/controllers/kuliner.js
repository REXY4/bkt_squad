const { Kuliner, gambarKuliner } = require("../../models");

exports.createKuliner = async (req, res) => {
    try {
        const { title, titleEnglish, start_time, end_time, deskripsi1, deskripsi2, deskripsi3, alamat} = req.body;
        
        const create = await Kuliner.create({
            title: title,
            titleEnglish : titleEnglish,
            start_time: start_time,
            end_time: end_time,
            deskripsi1: deskripsi1,
            deskripsi2: deskripsi2,
            deskripsi3: deskripsi3,
            alamat: alamat
        });
        res.send({
            status : "success",
            message : "data kuliner berhasil di tambahkan",
            data : {
                wisata : create
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message
        })
    }
}


exports.updateKuliners = async (req, res) => {
    try {
        const {id} = req.params;
        const { title, titleEnglish, start_time, end_time, deskripsi1, deskripsi2, deskripsi3, alamat} = req.body;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const data = {
          image : path + image,
        };
        const update = await Kuliner.update(data,{
            where : {id}
        });
        res.send({
            status : "success",
            message : "data kuliner berhasil di tambahkan",
            data : {
                wisata : data
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message
        })
    }
}


exports.uploadGambarKuliner = async (req, res) => {
    try{
        const {id} = req.params;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const create = await gambarKuliner.create({
            kulinerId : id,
            image : path + image,
        });   
        res.send({
            status : "success",
            message : "Data gambar berhasil",
            data : {
                wisata : create
            }
        })   
    }catch(error){
        res.status({
            status : "error",
            message : error.message
        })
    }
}


exports.getDataKuliners = async (req, res) => {
    try {
        const findAll = await Kuliner.findAll({
           include : [{
               model : gambarKuliner,
               as : "images"
           }]
        });
        res.send({
            status : "success",
            message : "pujik mpenk",
            data : {
                kuliner : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}

exports.getDataKulinerGambar = async (req, res) => {
    try {
        const findAll = await gambarKuliner.findAll({
        });
        res.send({
            status : "success",
            message : "pujik mpenk",
            data : {
                kuliner : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}