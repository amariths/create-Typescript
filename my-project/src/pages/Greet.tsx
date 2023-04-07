interface greedprops {
name: string,
age: number

}


export const Greet = (props: greedprops) => {
    return (
        <>
        <div>

            <h2>hej welcome {props.name} {props.age}</h2>

        </div>
        </>
    )
}
