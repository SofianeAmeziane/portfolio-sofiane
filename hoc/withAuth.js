const withAuth = (Component) => {
  return props => {
    return <Component title="Sofiane" {...props}/>
  }
}

export default withAuth;