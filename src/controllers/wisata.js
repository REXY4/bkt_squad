const { Wisata, Gambar } = require("../../models");

exports.createWisata = async (req, res) => {
    try {
        const { title, titleEnglish, start_time, end_time, deskripsi1, deskripsi2, deskripsi3, alamat} = req.body;
        
        const create = await Wisata.create({
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
            message : "data wisata berhasil di tambahkan",
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

exports.updateDataWisata = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, titleEnglish, start_time, end_time, deskripsi1, deskripsi2, deskripsi3, alamat} = req.body;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const data = {   
           image : path + image
        }
        const create = await Wisata.update(data,{
          where : {id}
        });
        res.send({
            status : "success",
            message : "Pujik Fignes",
            data : {
                wisata : create
            }
        });
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message
        })
    }
}

exports.uploadGambars = async (req, res) => {
    try{
        const {id} = req.params;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const create = await Gambar.create({
            wisataId : id,
            image : path + image,
        });   
        res.send({
            status : "success",
            message : "data gambar berhasil di tambahkan",
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


exports.getDataWisata = async (req, res) => {
    try {
        const findAll = await Wisata.findAll({
            include : [
                {
                model : Gambar,
                as : "images"
            }
        ]
        });
        res.send({
            status : "success",
            message : "karempeng",
            data : {
                wisata : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}

exports.getDetailDataWisata = async (req, res) => {
    try {
        const {id} = req.params;
        const findAll = await Wisata.findAll({
            where : {id},
            include : [
                {
                model : Gambar,
                as : "images"
            }
        ]
        });
        res.send({
            status : "success",
            message : "karempeng",
            data : {
                wisata : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}



exports.getDataWisataGambar = async (req, res) => {
    try {
        const findAll = await Gambar.findAll();
        res.send({
            status : "success",
            message : "karempeng",
            data : {
                wisata : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}

exports.getDataWisataGambarDetail = async (req, res) => {
    try {
        const {id} = req.params;
        const findAll = await Gambar.findAll({
            where : {wisataId : id} 
        });
        res.send({
            status : "success",
            message : "karempeng",
            data : {
                wisata : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}






