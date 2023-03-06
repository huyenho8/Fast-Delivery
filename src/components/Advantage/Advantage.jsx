import "./advantage.css";

export default function Advantage({ number, advColor, title, content }) {
  return (
    <>
      <div className="adv">
        <div className={`adv-number ${advColor}`}>{number}</div>
        <div className="adv-icon">
          <img src="assets/icons/arrow-icon.svg" alt="arrow-icon" />
        </div>
      </div>

      <p className="adv-title">{title}</p>
      <p className="adv-content">{content}</p>
    </>
  );
}
