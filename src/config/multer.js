const multer = require('multer');

const multerConfig = {
  storage: multer.memoryStorage({
    limits: {
      fileSize: 2097152, // 2 megabytes
    },
  }),
};

module.exports = multerConfig;