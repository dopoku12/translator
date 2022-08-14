const Display = ({ listItems }) => {
    console.log('list:', listItems);

    return (
        <ul>
            {
                listItems
            }
        </ul>
    )
}

export default Display;