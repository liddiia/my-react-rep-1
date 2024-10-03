import css from '/home/nook/repositorii/my-react-rep-1/vite-project/src/Components/Options.module.css'
const Reset = (IsReset) => {
  return (
    <button onClick = {IsReset} type="reset" className={css.button}> Reset </button>
  )
}

export default Reset