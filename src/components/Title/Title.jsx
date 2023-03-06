import "./title.css";

export default function Title({ title, content }) {
  return (
    <div className="title">
      <p className="text">{title}</p>
      <div className="item-absolute">
        <p className="text-copy">
          {title.split(" ")[0]}
          <span className="text-special">{title.slice(title.search(" "))}</span>
        </p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}
