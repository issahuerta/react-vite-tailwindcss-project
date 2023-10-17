// function Button(){
//     const name = 'Issa'
//     return (
//         <>
//             <button className="bg-primary px-5 py-2 text-white">{name}</button>
//         </>
//     )
// }

const Button = (props) => {

    const {name} = props;
    return (
        <>
            <button className="bg-secondary px-5 py-2 text-white">{name}</button>
        </>
    )
}
export default Button
 
