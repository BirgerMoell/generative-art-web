// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
<<<<<<< HEAD
    process (inputs, outputs, parameters) {
      const output = outputs[0]
      output.forEach(channel => {
        for (let i = 0; i < channel.length; i++) {
          channel[i] = Math.random() * 2 - 1
        }
      })
      return true
    }
  }
  
  registerProcessor('white-noise-processor', WhiteNoiseProcessor)
=======
  process (inputs, outputs, parameters) {
    const output = outputs[0]
    output.forEach(channel => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1
      }
    })
    return true
  }
}

registerProcessor('white-noise-processor', WhiteNoiseProcessor)
>>>>>>> 301d1d0df82bbd030253654ea8f6bc9dbeeb1594
