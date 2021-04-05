import Header from "../shared/Header";
import Footer from "../shared/Footer";
const Baselayout = (props) => {
  const { children, className, navClass = "with-bg", user, loading } = props;
  return (
    <div className="layout-container">
      <Header classNameheader={navClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <Footer classNameheader={navClass} user={user} loading={loading} />
    </div>
  );
};
export default Baselayout;
