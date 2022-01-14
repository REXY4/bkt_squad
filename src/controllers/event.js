const { Event } = require("../../models");

exports.createEvent = async (req, res) => {
    try {
        const { title, date, deskripsi, alamat} = req.body;
        const image = req.files.imageFile[0].filename;
        const path = process.env.PATH_PHOTO;
        const create = await Event.create({
            title: title,
            image:path+image,
            date : date,
            deskripsi: deskripsi,
            alamat: alamat
        });

        res.send({
            status : "success",
            message : "data Hotel berhasil di tambahkan",
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