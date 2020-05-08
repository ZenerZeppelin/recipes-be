import multer from "multer";

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads/")
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter(req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, true);
        }
        else {
            cb(null, false);
        }
    }
});

export const uploadImage = (fieldName) => {
    return upload.single(fieldName);
};

