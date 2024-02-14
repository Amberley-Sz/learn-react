export default function MenuBar() {
  return (
    <div>
      <AButton>
        Button 1
      </AButton>
      <AButton>
        Button 2
      </AButton>
    </div>
  );
}

function AButton({ id, color, size, children }) {
  const handleClick = () => {
    document.getElementById(`${id}`).style.backgroundColor = color;
    document.getElementById(`${id}`).style.fontSize = size;
  };

  return (
    <button id={`${id}`} onClick={handleClick}>
      {children}
    </button>
  );
}
