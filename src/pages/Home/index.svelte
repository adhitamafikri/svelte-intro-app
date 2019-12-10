<script>
  import Typography from 'components/Typography'

  let num = 0

  function double() {
    num += 1
  }

  $: doubled = num * 2
</script>

<p>Hello biches this is home page</p>

<button on:click={double}>
  Double the {num}
</button>

<p>double of {num} is {doubled}</p>

<Typography />