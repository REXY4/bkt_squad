const { Hotel, gambarHotel } = require("../../models");

exports.createHotel = async (req, res) => {
    try {
        const { title, bintang, start_time, end_time, deskripsi1, deskripsi2, deskripsi3, alamat} = req.body;
        const create = await Hotel.create({
            title: title,
            bintang : bintang,
            start_time: start_time,
            end_time: end_time,
            deskripsi1: deskripsi1,
            deskripsi2: deskripsi2,
            deskripsi3: deskripsi3,
            alamat: alamat
        });
        res.send({
            status : "success",
            message : "data Hotel berhasil di tambahkan",
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
};

exports.updateHotels = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, bintang, start_time, end_time, deskripsi1, deskripsi2, deskripsi3, alamat} = req.body;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const data = {   
            image : path + image,
        };
        const create = await Hotel.update(data,{
          where : {id}
        });
        res.send({
            status : "success",
            message : "Pujik Fignes",
            data : {
                hotel : create
            }
        });
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message
        })
    }
}


exports.uploadGambarHotel = async (req, res) => {
    try{
        const {id} = req.params;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const create = await gambarHotel.create({
            hotelId : id,
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



exports.getDataHotels = async (req, res) => {
    try {
        const findAll = await Hotel.findAll({
           include : [{
               model : gambarHotel,
               as : "images"
           }]
        });
        res.send({
            status : "success",
            message : "pujik mpenk",
            data : {
                hotel : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}

exports.getDataHotelGambar = async (req, res) => {
    try {
        const findAll = await gambarHotel.findAll({
        });
        res.send({
            status : "success",
            message : "pujik mpenk",
            data : {
                hotel : findAll
            }
        })
    } catch (error) {
        res.status(500).send({
            status : "error",
            message : error.message 
        })
    }
}





