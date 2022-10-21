const multer = require("multer");
const path = require("path");

// Multer config -- only accept certain files and use external 3rd party service
// Cloudinary as storage
module.exports = multer({
  storage: multer.diskStorage({
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".webp") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});