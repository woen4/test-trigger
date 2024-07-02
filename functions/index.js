import { app } from '@azure/functions'

app.serviceBusQueue('StudentsVerificationQueueTrigger', {
  trigger: {
    connection: 'AZURE_SERVICEBUS_CONNECTION_STRING',
    queueName: 'students-verification',
    handler: (message) => {
      console.info(message)
    },
  },
})



