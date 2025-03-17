const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button 
        type="button"
        className={reqType === buttonText ? "selected" : null}
        onClick={() => setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button