const Display = ({ listItems }) => {
    console.log('listItems:', listItems);

    return (
        <ul>
            {
                listItems
            }
        </ul>
    )
}

export default Display;