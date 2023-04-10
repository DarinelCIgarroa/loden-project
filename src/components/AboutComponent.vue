<template>
  <q-layout>
    <q-page-container class="flex flex-center">
      <q-page>
        <br>
        <q-card flat bordered class="my-card row no-border q-px-lg q-mt-lg" style="max-width: 1250px;">
          <q-card-section class="text-center col-12 section-title">
            <div class="text-h3 ">Acerca de nosotros</div>
          </q-card-section>
          <q-card-section class="col-6">
            <span style="font-size: 20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua.
            </span>
            <q-list>
              <q-item style="font-size: 17px">
                <q-item-section avatar top>
                  <i class=""></i>
                  <q-icon name="fa-solid fa-check-double" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">Ullamco laboris nisi ut aliquip ex ea commodo consequat</q-item-label>
                </q-item-section>
              </q-item>
              <q-item style="font-size: 17px">
                <q-item-section avatar top>
                  <i class=""></i>
                  <q-icon name="fa-solid fa-check-double" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">Ullamco laboris nisi ut aliquip ex ea commodo consequat</q-item-label>
                </q-item-section>
              </q-item>
              <q-item style="font-size: 17px">
                <q-item-section avatar top>
                  <i class=""></i>
                  <q-icon name="fa-solid fa-check-double" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">Ullamco laboris nisi ut aliquip ex ea commodo consequat</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-card-section>
          <q-card-section class="col-6" style="font-size: 20px">
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <br>
            <q-btn size="md" class="q-mt-lg" outline rounded color="primary" label="Contáctanos"></q-btn>
          </q-card-section>
          <q-card-section class="col-6 flex justify-center items-center">
            <q-img src="../statics/images/counts-img.svg" style="height: 400px; max-width: 650px">
            </q-img>
          </q-card-section>
          <q-card-section class="col-6" style="font-size: 20px;">
            <div class="row">

              <div class="col-md-6">
                <div class="count-box">
                  <q-icon class="icon" color="primary" name="far fa-smile-beam" />
                  <span class="q-ml-md">65</span>
                  <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="count-box">
                  <q-icon class="icon" color="primary" name="fa-regular fa-file" />
                  <span class="q-ml-md">80</span>
                  <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="count-box">
                  <q-icon class="icon" color="primary" name="fa-regular fa-clock" />
                  <span class="q-ml-md">90</span>
                  <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non
                    vel</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="count-box">
                  <q-icon class="icon" color="primary" name="fa-regular fa-chess-queen" />
                  <span class="q-ml-md">10</span>
                  <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
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
    console.log('component about us');
  },
  setup() {

  },
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding-top: 0;
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
</style>
