<template>
  <v-container class="fill-height" justify="center" align="center">
    
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
      <v-alert type="warning" class="mb-4">
        Hey man, this site is brand new it basically doesn't work so don't complain!
      </v-alert>
      
      <v-card class="text-center font-weight-bold">
        <v-card-title>
        <h1>Priv lol</h1>
        </v-card-title>
        <v-card-text>
        <div class="typing-animation">
          <span ref="typedText"></span>
        </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" to="/about" disabled>Docs</v-btn>
            <v-btn color="red" to="/services" disabled>Services</v-btn>
            <v-btn color="red" to="/contact" disabled>Contact</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Typed from 'typed.js';

const typedText = ref(null);

onMounted(() => {
  new Typed(typedText.value, {
    strings: [
      "// Did you remember to disable the keylogger? Probably not.",
      "Ever wonder if your router is sending data to someone else?",
      "'What is the matrix? Are we already in it?' - Terry Davis",
      "The government owns your metadata. They know what you're thinking.",
      "'You’re not supposed to understand it.' - Terry Davis",
      "Linux is freedom, but they still control the cloud.",
      "The government can track you by your IP, your browser history, and your heart rate.",
      "Your device is always listening. So is your smart speaker.",
      "The AI already knows your next move. It's watching you right now.",
      "What if your reflection is not really you?",
      "The deep web isn’t where the secrets are—it’s the cloud.",
      "Everything you connect to is a potential surveillance device.",
      "They built the Matrix. It’s all just ones and zeros.",
      "Every ping to a server is just another ID they collect on you.",
      "Your webcam is always on. Just because you closed the app doesn’t mean it's off.",
      "Did you really change your password, or are they already inside?",
      "‘Incognito’ mode is a lie. They know exactly what you're doing.",
      "Every keystroke is tracked. Every click is recorded.",
      "Stop clicking on those ‘innocent’ links. The code is already in.",
      "The NSA doesn’t need to break into your house. They’ve already got your phone.",
      "Think you’re anonymous on Tor? They’ve already tracked you.",
      "Why is your VPN leaking? They see your real IP.",
      "The cloud isn’t your storage, it’s your prison cell.",
      "They’re not watching you through the screen, they’re listening through your microphone.",
      "Your smartphone is the best surveillance device you’ve ever owned.",
      "Every app on your phone is a backdoor to your data.",
      "The algorithms already know what you’ll do tomorrow.",
      "You think you’re offline? The system still knows.",
      "Your search history is a goldmine. And they’re mining it.",
      "Google doesn’t sell ads, they sell you.",
      "Every email is scanned by an algorithm. They know your thoughts before you hit send.",
      "Data is the new currency, and your soul is the product.",
      "They know what you search, what you buy, and even what you think about buying.",
      "You’re not a person online. You’re just a set of patterns.",
      "You think you're ‘out of the system’? It’s already in your head.",
      "Nothing online is private. Not even your incognito mode.",
      "You clicked that link? They knew you would.",
      "Every ping to a server is another way to track your habits.",
      "They’ve been listening to you through the phone. Just say something new.",
      "The next revolution won't be in the streets; it will be in the algorithms.",
      "Who owns your digital footprint? They already do.",
      "Every search you make is a thread in the web they’re building around you.",
      "The 'free' apps you use are just ways to track your data.",
      "Everything you do is already in their database. They don’t need to hack you.",
      "Your phone isn’t just a phone. It’s a surveillance tool in your pocket.",
      "The only thing 'secure' online is the data they’ve already stolen from you.",
      "Stop trusting the cloud. It's just a convenient way to control your data.",
      "The AI is watching. It’s learning from you.",
      "You thought you were deleting it? It’s never gone.",
      "Everything you do online is already predicted.",
      "Every website you visit is a step deeper into their web.",
      "Did you think ‘incognito’ was enough? They’ve already profiled you.",
      "They see you, even when you think you're ‘offline.’",
      "Your behavior is already being predicted by algorithms.",
      "You’re not using the internet. The internet is using you.",
      "Your digital presence is just as real as your physical body. They control both.",
      "The data you create is worth more than your life.",
      "Your phone has been tracking you since the moment you turned it on.",
      "Every ad you see is a reminder that they’re watching.",
      "The internet isn’t a place—it’s a tool for control."
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    cursorChar: '_',
  });
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>