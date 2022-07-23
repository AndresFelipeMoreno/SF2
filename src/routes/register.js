const express = require("express");
const { render } = require("express/lib/response");
const res = require("express/lib/response");
const router = express.Router();
const db = require("../database");
const helpers = require('../lib/helpers');

router.get("/", (req, res) => {
  res.render("./signup");
});

router.post("/", async (req, res) => {
  const { NOMBRE, EMAIL, PAIS, CONTRASENA, CONFIRMATION, TELEFONO,DEPARTAMENTO, MUNICIPIO} =
    req.body;
  await db.query("SELECT EMAIL FROM USUARIOS", async function (err, mails, fields) {
    if (err) throw err;
    let error2 = { error: "mostrar" };
    if (validate(mails, EMAIL)) {
      res.render("./signup", { error2 });
    } else {
      if (CONTRASENA != CONFIRMATION) {
        let error = { error: "mostrar" }
        res.render("./signup", { error })

      }
      else {
        const newUser = {
          NOMBRE,
          EMAIL,
          CONTRASENA,
          TELEFONO,
          DEPARTAMENTO,
          MUNICIPIO
        };
        newUser.CONTRASENA = await helpers.encryptPassword(CONTRASENA);
        console.log(newUser.CONTRASENA);
        console.log(newUser);
        await db.query("INSERT INTO USUARIOS set ?", [newUser], function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
        res.redirect("/signin");
      }
    }
  });
});

function validate(mails, newMail) {
  for (const mail of mails) {
    if (mail.EMAIL == newMail) {
      return true;
    }
  }
  return false;
}

module.exports = router;