import Header from '../shared/Header'
const Baselayout = props => {
    const {children, className,navClass="with-bg",user,loading} = props;
return(
        <div className="layout-container">
            <Header 
            classNameheader={navClass}
            user={user} 
            loading={loading} />
            <main className={`cover ${className}`}>
            <div className="wrapper">
                {children}
            </div>
            </main>
        </div>
)
}
export default Baselayout