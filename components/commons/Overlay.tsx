interface IProps {
  onClick?: () => void
}

export const Overlay = ({ onClick = () => {} }: IProps) => {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-filter blur-sm z-10 animate-reveal" 
      onClick={onClick}
    />
  )
}