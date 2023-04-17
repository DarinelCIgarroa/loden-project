<template>
  <q-layout>
    <q-page-container class="flex flex-center">
      <q-page>
        <q-card flat bordered class="row my-card q-mt-lg no-border justify-center">
          <q-card-section class="text-center col-12 section-title">
            <div class="text-h3">Contáctanos</div>
          </q-card-section>
          <q-card-section>
            <div class="q-pa-md  q-pl-lg">
              <div class="row">
                <div class="col-lg-4 col-md-6 q-pl-xl" data-aos="fade-up" data-aos-delay="100">
                  <div class="contact-about">
                    <h3>Vesperr</h3>
                    <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus.
                      Scelerisque
                      felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                    <div class="social-links">
                      <div class="q-pa-md q-gutter-sm">
                        <q-btn round push glossy class="link"> <i class="fa-brands fa-linkedin-in"></i> </q-btn>
                        <q-btn round push style=" --fa-secondary-opacity: 0.6;">
                          <i class="fa-brands fa-instagram insta "></i>
                        </q-btn>
                        <q-btn round push glossy class="face"><i class="fa-brands fa-facebook-f  fa-lg"></i></q-btn>
                        <q-btn round push glossy class="twitt"><i class="fa-brands fa-twitter fa-lg"></i> </q-btn>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                  <div class=" q-pa-md">
                    <div class="q-pa-md">
                      <div style="max-width: 350px">
                        <q-item>
                          <q-item-section side bottom>
                            <q-icon color="yellow"> <i class="fa-solid fa-location-dot fa-xl" style="color: red; "></i>
                            </q-icon>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label> A108 Adam Stree</q-item-label>
                            <q-item-label caption lines="2">New York, NY 535022</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section side bottom>
                            <q-icon color="yellow"><i class="fa-solid fa-envelope-circle-check fa-xl"
                                style="color: #00ffff;"></i> </q-icon>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label> Vesper@example.com</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section side bottom>
                            <q-icon><i class="fa-solid fa-phone fa-xl"></i></q-icon>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label> +52 5589 55488 55s</q-item-label>
                          </q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">

                  <div class="q-pa-md" style="max-width: 400px">
                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                      <q-input filled v-model="name" label="Your name *" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                      <q-input filled v-model="regEmail" type="email" label="email" hint=""
                        :rules="[val => !!val || 'Email is missing']" />
                      <q-input filled v-model="asunto" label="Asunto" hint=""> </q-input>
                      <q-input v-model="text" filled type="textarea" />
                      <div class="q-mt-lg ">
                        <q-btn type="submit" color="primary" label="Submit"></q-btn>
                      </div>
                    </q-form>
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
    console.log('contac ');
  },

  setup() {

  },
}
</script>
