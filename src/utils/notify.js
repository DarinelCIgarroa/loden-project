import { Notify } from 'quasar'

const notifyOptionsSuccess = {
  position: 'bottom-right',
  progress: true,
  timeout: 2500,
  color: 'positive',
  textColor: 'white',
  type: 'positive',
  actions: [{ icon: 'close', color: 'white' }]
}

const notifyOptionsError = {
  timeout: 2500,
  progress: true,
  position: 'bottom-right',
  color: 'negative',
  textColor: 'white',
  type: 'negative',
  actions: [{ icon: 'close', color: 'white' }]
}

const notifyOptionsWarning = {
  progress: true,
  timeout: 2500,
  position: 'bottom-right',
  color: 'warning',
  textColor: 'black',
  type: 'warning',
  actions: [{ icon: 'close', color: 'white' }]
}

export const notifySuccess = (personalizedMessage) => {
  Notify.create({
    ...notifyOptionsSuccess,
    message: personalizedMessage !== undefined ? personalizedMessage : 'Operación completada exitosamente'
  })
}
export const notifyError = (personalizedMessage) => {
  Notify.create({
    ...notifyOptionsError,
    message: personalizedMessage !== undefined ? personalizedMessage : '¡Opps! Algo salió mal, contacta con el administrador'
  })
}

export const notifyWarning = (personalizedMessage) => {
  Notify.create({
    ...notifyOptionsWarning,
    message: personalizedMessage !== undefined ? notifyOptionsWarning : 'Alerta'
  })
}
