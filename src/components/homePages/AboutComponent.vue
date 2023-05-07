<template>
  <q-layout>
    <q-page-container class="flex flex-center">
      <q-page>
        <q-card flat bordered class="my-card row no-border q-px-lg q-mt-lg">
          <q-card-section class="text-center col-12 section-title">
            <div class="text-h3">Acerca de nosotros</div>
          </q-card-section>
          <q-card-section
            class="row flex-center text-center col-lg-6 col-md-6 col-sm-12 col-xs-12 marked-advantages"
          >
            <span style="font-size: 20px" class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <div class="flex row flex-center text-center">
              <div class="q-pa-md col-12">
                <q-list class="list">
                  <q-item>
                    <q-item-section side top>
                      <q-icon
                        name="fa-solid fa-check-double"
                        color="primary"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label lines="2">
                        <span
                          >Ullamco laboris nisi ut aliquip ex ea commodo
                          consequat
                        </span>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section side top>
                      <q-icon
                        name="fa-solid fa-check-double"
                        color="primary"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label lines="2">
                        <span>
                          Ullamco laboris nisi ut aliquip ex ea commodo
                          consequat
                        </span>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section side top>
                      <q-icon
                        name="fa-solid fa-check-double"
                        color="primary"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label lines="2">
                        <span>
                          Ullamco laboris nisi ut aliquip ex ea commodo
                          consequat
                        </span>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section side top>
                      <q-icon
                        name="fa-solid fa-check-double"
                        color="primary"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label lines="2">
                        <span>
                          Ullamco laboris nisi ut aliquip ex ea commodo
                          consequat
                        </span>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-card-section>
          <q-card-section
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center home-contact"
          >
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </span>
            <br />
            <q-btn
              size="lg"
              class="q-mt-lg"
              outline
              rounded
              color="primary"
              label="Contáctanos"
            ></q-btn>
          </q-card-section>
          <q-card-section
            class="col-lg-6 col-md-6 col-sm-12 col-xs-10 flex justify-center items-center img-content"
          >
            <q-img
              src="../../statics/images/counts-img.svg"
              style="height: 400px; max-width: 650px"
            >
            </q-img>
          </q-card-section>
          <q-card-section class="row col-6 advantages">
            <div class="col-6 count-box advantages-info">
              <div>
                <q-icon class="icon" color="primary" name="far fa-smile-beam" />
                <span class="q-ml-md">65</span>
              </div>
              <p>
                <strong>Happy Clients</strong> consequuntur voluptas nostrum
                aliquid ipsam architecto ut.
              </p>
            </div>
            <div class="col-6 count-box advantages-info">
              <div>
                <q-icon
                  class="icon"
                  color="primary"
                  name="fa-regular fa-file"
                />
                <span class="q-ml-md">65</span>
              </div>
              <p>
                <strong>Happy Clients</strong> consequuntur voluptas nostrum
                aliquid ipsam architecto ut.
              </p>
            </div>
            <div class="col-6 count-box advantages-info">
              <div>
                <q-icon
                  class="icon"
                  color="primary"
                  name="fa-regular fa-clock"
                />
                <span class="q-ml-md">65</span>
              </div>
              <p>
                <strong>Happy Clients</strong> consequuntur voluptas nostrum
                aliquid ipsam architecto ut.
              </p>
            </div>
            <div class="col-6 count-box advantages-info">
              <div>
                <q-icon
                  class="icon"
                  color="primary"
                  name="fa-regular fa-chess-queen"
                />
                <span class="q-ml-md">65</span>
              </div>
              <p>
                <strong>Happy Clients</strong> consequuntur voluptas nostrum
                aliquid ipsam architecto ut.
              </p>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
</script>

<style scoped>
.page {
  padding: 0 !important;
  margin: 0 !important;
}
.my-card {
  width: 1400px;
  background-size: cover;
  background-position: center;
}
.counts {
  padding-top: 0;
}
.home-contact {
  font-size: 18px;
}
.counts .content .count-box {
  padding: 20px 0;
  width: 100%;
}

.count-box .icon {
  display: block;
  font-size: 36px;
  float: left;
  line-height: 0;
}

.count-box span {
  font-size: 36px;
  line-height: 30px;
  display: block;
  font-weight: 700;
  color: #222222;
  margin-left: 50px;
}

.count-box p {
  padding: 15px 0 0 0;
  margin: 0 0 0 50px;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  color: #484848;
}

.marked-advantages span {
  font-size: 18px;
}
.list span {
  font-size: 20px;
}

@media (min-width: 64px) and (max-width: 600px) {
  .list span {
    font-size: 18px;
  }

  .img-content {
    display: none;
  }
}
</style>
