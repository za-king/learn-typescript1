

type StatusProps = {
    status : string
}

export const Status = (props : StatusProps) => {
    let message 
    if(props.status === "loading") {
        message = "Loading..."
    }else if (props.status === "success"){
        message = "Data fetch successfully"
    }else if (props.status === "error"){
        message = "error fetching data"
    }
  return (
    <div>Status - {message}</div>
  )
}
