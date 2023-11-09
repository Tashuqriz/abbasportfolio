import '../../css/main.css'
const Logo = ({ mode }) => {
    console.log(mode)
    return (
        <div class="logo">
            <h1 class="logo_title" style={{color: mode !== "dark" ? "white" : "black"}}>
                <span class="Logo_fName">Abbas</span><span>Dhanji</span>
            </h1>
        </div>
    )
};

export default Logo