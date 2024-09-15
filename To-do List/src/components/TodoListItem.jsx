export default function TodoListItem({
    id,
    isCompleted,
    onClick,
    title
}) {

    return (

        <li
            onClick={() => onClick(id)}

            style={{

                textDecoration: isCompleted
                    ? 'line-through'
                    : 'none'
            }}
        >
            {title}
        </li>
    );
}