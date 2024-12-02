import Plan from "./plan";



const homeH1Style = {
    fontSize:'36px',
    lineHeight:'42px',
    paddingTop:'20px',
    paddingBottom:'20px'
}

const homePStyle = {
    fontSize:'18px',
    lineHeight:'26px',
    paddingTop:'15px',
    paddingBottom:'15px'
}
const Home = () => {
    return (
        <>
            <div className="home">
                <h1 style={homeH1Style}>Flexiplan </h1>
                <p>Make your own plan and enjoy great savings! Only for GP Customers</p>
            </div>
            
                <Plan/>
            
            
        </>
        
      );
}

export default Home