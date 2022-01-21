import { IClasses } from "lib/interfaces/IBasicProps"

export const Buttons = ({ classes }: IClasses) => {
  return (
    <div className={`items-center justify-center ${classes}`}>
      <button className="mr-2 button">Sign in</button>
      <button className="ml-2 button button-horizontal button--primary">Sign up</button>
    </div>
  )
}