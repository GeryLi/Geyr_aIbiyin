const theme = {
    color: {
        primaryColor: "#ff385c"
    },
    mixin: {
        boxShadow: `transition:box-shadow 200ms;
        &:hover{
           box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }`
    }
}

export default theme