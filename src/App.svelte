<script>
  import { Router, Route, Link } from 'svelte-routing'
  import Home from 'pages/Home'
  import Create from 'pages/Create'
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
  </nav>
  <Route path="/" component={Home} />
  <Route path="/create" component={Create} />
</Router>
