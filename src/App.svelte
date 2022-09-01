<script>
  import tailwindCss from './app.css'
  import useSocketIo from './custom_hooks/useSocketIo'

  var url = 'http://192.168.43.225'
  var [socketClient] = useSocketIo(
    `${url}:3000`,{
      autoConnect:false
    }
  )

  function synchronize(){
  	socketClient.emit(
      'sync',
      Date.now()
    )
  }
</script>

<div class="absolute-fullwidth-container">
  <button on:click={synchronize} class="btn">
    Synchronize!!!
  </button>
</div>

