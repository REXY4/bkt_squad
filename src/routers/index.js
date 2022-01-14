const express = require("express");
const router = express.Router();

//controllers
const { createHotel, uploadGambarHotel, getDataHotels, updateHotels, getDataHotelGambar } = require("../controllers/hotel");
const { createKuliner, getDataKuliners, updateKuliners, uploadGambarKuliner, getDataKulinerGambar } = require("../controllers/kuliner");
const { createWisata, uploadGambars, getDataWisata, updateDataWisata, getDataWisataGambar, getDataWisataGambarDetail, getDetailDataWisata } = require("../controllers/wisata");
const { createEvent } = require("../controllers/event");

//middleware
const { uploadFile } = require("../middlewares/uploadFile");

//wisata
router.post("/add/wisata/post",  createWisata);
router.patch("/wisata/:id/update", uploadFile("imageFile"),  updateDataWisata);
router.get("/wisatas",  getDataWisata);
router.get("/wisata/:id",  getDataWisataGambarDetail);
router.get("/wisata/detail/:id",  getDetailDataWisata);
router.post("/add/wisata/gambar/:id/post", uploadFile("imageFile"), uploadGambars);

//kuliner
router.post("/add/kuliner/post",  createKuliner);
router.patch("/kuliners/:id/post", uploadFile("imageFile"),  updateKuliners);
router.post("/kuliners/gambar/:id/post", uploadFile("imageFile"), uploadGambarKuliner);
router.get("/kuliners",  getDataKuliners);
router.get("/kuliner/gambar",  getDataKulinerGambar);
router.get("/wisatas/gambars",  getDataWisataGambar);

//Hotel
router.post("/add/hotel/post",  createHotel);
router.post("/add/hotel/:id/post", uploadFile("imageFile"), uploadGambarHotel);
router.patch("/hotel/:id/update", uploadFile("imageFile"),  updateHotels);
router.get("/hotels", getDataHotels);
router.get("/hotel/gambar", getDataHotelGambar);

//event
router.post("/add/event/post", uploadFile("imageFile"), createEvent);


module.exports = router;