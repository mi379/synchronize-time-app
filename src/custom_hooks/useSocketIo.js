import {io} from 'socket.io-client'
import {onMount,onDestroy} from 'svelte'

export default function(address,config){
  var socketIo = io(address,config)
  
  onMount(() => socketIo.connect())

  onDestroy(() => socketIo.close())

  return [
    socketIo
  ]
}