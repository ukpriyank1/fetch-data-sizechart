const UserData = ({users}) => {
    return (
        <>
           {console.log(users.map((label) => {
              return <li>{label}</li>
           }))}
        </>
    )
}
export default UserData;