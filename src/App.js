function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
        </div>
    );
}

export default App;

// v5 === v6
<BrowserRouter>
  ...
</BrowserRouter>

// v5 (Switch and Route wrapper)
<Switch>
  <Route path="/home">
    <Homepage />
  </Route>
</Switch>

// v6 (Routes and Route element)
<Routes>
  <Route path="/home" element={<Homepage />} />
</Routes>


// v5 (exact is required to display only subroute)
<Route path="/product" exact element={...} />
<Route path="/product/:pid" element={...} />

// v6 (no need for exact)
<Route path="/product" element={...} />
<Route path="/product/:pid" element={...} />

// v5 
<NavLink activeClassName={"active"} to="/product">
  Product
</NavLink>

// v6
<NavLink className={(nav) => nav.isActive && "active"} to="/product">
  Product
</NavLink>

// v5 === v6
const params = useParams();
console.log(params.pid);

// v5
<Redirect to="/home"/>

// v6
<Navigate replace to="/home"/>


// v5
// component route
<Route path="/product"><Product /></Route>

// inside component
const Product = () => {
  return (
    // No need Routes + full path is needed
    <Route path="/product/other"> 
      <OtherPage />
    </Route>
  );
}

// v6
// component route
<Route path="/product/*" element={<Product />} />

// inside component
const Product = () => {
  return (
    // Routes is needed + relative path is ok
    <Routes>
      <Route path="other" element={<OtherPage />} />
    </Routes>
  );
}


// v6 
// component route
<Route path="/product/*" element={<Product />}>
  <Route path="other" element={<OtherPage />} />
</Route>

// inside component
const Product = () => {
  return (
    <Outlet />
  );
}

// v5
const history = useHistory();
history.push("/home");
history.replace("/home");

// v6
const navigate = useNavigate();
navigate("/home", {replace: true});
navigate(-1);