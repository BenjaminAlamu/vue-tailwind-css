export default function({ store, next, router }) {
  if (!store.state.auth.token) {
    router.replace({
      name: "login-tenants",
    });
  }
  next();
}
