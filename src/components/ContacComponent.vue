<template>
  <q-layout>
    <q-page-container class="flex flex-center">
      <q-page>
        <br>
        <q-card flat bordered class="my-card row no-border q-px-lg q-mt-lg" style="max-width: 1250px;">
          <q-card-section class="text-center col-12 section-title">
            <div class="text-h3">Contacto</div>
          </q-card-section>
          <q-card-section class="section">
            <div class="container">
              <div class="contact-info">
                <div>
                  <h2>Infomación de contacto</h2>
                  <ul class="info">
                    <li>
                      <span><q-icon class="img" name="face"></q-icon></span>
                      <span>Ciudad de México, 12312, 1231</span>
                    </li>
                    <li>
                      <span><q-icon class="img" name="mail"></q-icon></span>
                      <span>loden@gmail.com</span>
                    </li>
                    <li>
                      <span><q-icon class="img" name="call"></q-icon></span>
                      <span>9612365046</span>
                    </li>
                  </ul>
                </div>
                <ul class="sci">
                  <li><a href="#"><q-icon class="img" name="fa-brands fa-facebook"></q-icon></a></li>
                  <li><a href="#"><q-icon class="img" name="fa-brands fa-instagram"></q-icon></a></li>
                  <li><a href="#"><q-icon class="img" name="fa-brands fa-twitter"></q-icon></a></li>
                </ul>
              </div>
              <div class="contact-form">
                <h2>Send a Message</h2>
                <div class="form-box">
                  <div class="input-box w50">
                    <input type="text" required>
                    <span>Primer apellido</span>
                  </div>
                  <div class="input-box w50">
                    <input type="text" required>
                    <span>Segundo apellido</span>
                  </div>
                  <div class="input-box w50">
                    <input type="email" required>
                    <span>Correo electronico</span>
                  </div>
                  <div class="input-box w50">
                    <input type="email" required>
                    <span>Número de telefono</span>
                  </div>
                  <div class="input-box w100">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <span>Escribe tu mensaje aqui</span>
                  </div>
                  <div class="input-box w100">
                    <input type="submit" value="Enviar">
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  mounted() {
  },
  setup() {

  },
}
</script>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 1250px; */
  min-height: 100vh;
  background: #0955a0;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #0eb157;
}

.container {
  position: relative;
  min-width: 1100px;
  min-height: 550px;
  display: flex;
  z-index: 1000;
  /* background: #fff; */
}

.container .contact-info {
  position: absolute;
  top: 40px;
  width: 350px;
  height: calc(100% - 80px) !important;
  background: #0f8f84;
  z-index: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

.container .contact-info h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 500;

}

.container .contact-info ul.info {
  position: relative;
  margin: 20px 0;
}

.container .contact-info ul.info li {
  position: relative;
  list-style: none;
  display: flex;
  margin: 20px 0;
  cursor: pointer;
  align-items: flex-start;
}

.container .contact-info ul.info li span:nth-child(1) {
  width: 30px;
  min-width: 30px;
}

.container .contact-info ul.info li span:nth-child(1) .img {
  max-width: 100%;
  filter: invert(1);
}

.container .contact-info ul.info li span:nth-child(2) .img {
  color: #fff;
  margin-left: 10px;
  font-weight: 300;
}

.container .contact-info ul.sci {
  position: relative;
  display: flex;

}

.container .contact-info ul.sci li {
  list-style: none;
  margin-right: 15px;
}

.container .contact-info ul.sci li a {
  text-decoration: none;
}

.container .contact-info ul.sci li a .img {
  filter: invert(1);
}


.container .contact-form {
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background: #fff;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);
}

.container .contact-form h2 {
  color: #0f3959;
  font-size: 24px;
  font-weight: 500;
}

.container .contact-form .form-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
}

.container .contact-form .form-box .input-box {
  position: relative;
  margin-bottom: 35px;
}

.container .contact-form .form-box .input-box.w50 {
  width: 47%;
}

.container .contact-form .form-box .input-box.w100 {
  width: 100%;
}

.container .contact-form .form-box .input-box input,
.container .contact-form .form-box .input-box textarea {
  width: 100%;
  resize: none;
  padding: 5px 0;
  font-weight: 300;
  color: #333;
  border: none;
  outline: none;
  border-bottom: 1px solid #7777;
}

.container .contact-form .form-box .input-box textarea {
  height: 120px;
}

.container .contact-form .form-box .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  pointer-events: none;
  font-size: 18px;
  font-weight: 300;
  transition: 0.3s;
}

.container .contact-form .form-box .input-box input:focus~span,
.container .contact-form .form-box .input-box input:valid~span,
.container .contact-form .form-box .input-box textarea:focus~span,
.container .contact-form .form-box .input-box textarea:valid~span {
  transform: translateY(-20px);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #0f3959;
  font-weight: 500;
}

.container .contact-form .form-box .input-box input[type="submit"] {
  position: relative;
  cursor: pointer;
  color: #fff;
  background: #055a55;
  border: none;
  max-width: 150px;
  padding: 12px;
}

.container .contact-form .form-box .input-box input[type="submit"]:hover {
  background: #0eb157;
}

@media (max-width: 1200px) {
  .container {
    width: 90%;
    min-width: auto;
    margin: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  .contact-info {
    top: 0;
    height: 500px;
    position: relative;
    box-shadow: none;
  }

  .container .contact-info {
    position: relative;
    width: calc(100% -350xp);
    padding-left: 0;
    margin-left: 0;
    padding: 40px;
    height: 550px;
    box-shadow: none;

  }

  @media (max-width: 991px) {
    .section {
      background: #fff38e;
    }

    .section:before {
      display: none;
    }

    .container {
      display: flex;
      flex-direction: column-reverse;
    }

    .container .contact-form {
      width: 100%;
      height: auto;
    }

    .container .contact-info {
      width: 100%;
      height: auto;
      flex-direction: column;
    }

    .container .contact-info ul.sci {
      position: relative;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    .container .contact-form {
      padding: 25px;
    }

    .container .contact-info {
      padding: 25px;
      flex-direction: column;
      align-items: flex-start;

    }

    .container .contact-info ul.sci {
      margin-top: 40px;
    }

    .container .contact-form .form-box .input-box.w50 {
      width: 100%;
    }
  }
}
</style>
