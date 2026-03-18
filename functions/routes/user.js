const router = require("express").Router();
const admin = require("firebase-admin");
let data = []; //(difine GLOBLE array)

router.get("/", (req, res) => {
    return res.send("inside the user router");
});

router.get("/jwtVerfication", async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(500).send({ msg: "Token not found" });
    }

    const token = req.headers.authorization.split(" ")[1];
    try {
        const decodedValue = await admin.auth().verifyIdToken(token);
        if (!decodedValue) {
            return res
                .status(500)
                .json({ success: false, msg: "UnAuthorized access" });
        }
        return res.status(200).json({ success: true, data: decodedValue });
    } catch (err) {
        return res.send({
            success: false,
            msg: `Error in extracting the token : ${err} `,
        });
    }
});



// use for How many users can log in to the system
const listALUsers = async (nextpagetoken) => {
    admin
        .auth()
        .listUsers(1000, nextpagetoken)
        .then((listuserresult) => {
            listuserresult.users.forEach((rec) => {
                data.push(rec.toJSON());
            });
            if (listuserresult.pageToken) {
                listALUsers(listuserresult.pageToken);
            }
        })
        .catch((er) => console.log());
};

listALUsers();

router.get("/all", async (req, res) => {
    listALUsers();
    try {
        return res
            .status(200)
            .send({ success: true, data: data, dataCount: data.length });
    } catch (er) {
        return res.send({
            success: false,
            msg: `Error in listing users :,${er}`,
        });
    }
});

module.exports = router;
