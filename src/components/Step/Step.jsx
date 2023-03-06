import "./step.css";

export default function Step({ step, content, number }) {
  return (
    <>
      <div className={`step step-${step}`}>
        <p className="step-title">{step}</p>
        <div className="step-content">
          <p className="step-text">{content}</p>
        </div>
        <div className="step-number">{number}</div>
      </div>
    </>
  );
}
