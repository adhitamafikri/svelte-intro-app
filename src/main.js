import App from './App.svelte'

const app = new App({
  target: document.getElementById('svelte-app'),
  hydate: true
})

window.app = app

export default app