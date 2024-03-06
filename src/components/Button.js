
export default function Button({ children, onClick }) {
    console.log('title', children)
return(
        <button className="button-block" onClick={onClick} >
            {children}
        </button>
    )
}