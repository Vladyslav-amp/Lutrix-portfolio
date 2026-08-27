import './FeatureItem.scss';
export default function FeatureItem({
  icon: Icon,
  title,
  text
}) {
  return <div className="feature-item">
    <Icon className="feature-item__icon" />
    <div className="feature-item__body">
      <strong className="feature-item__title">{title}</strong>
      <span className="feature-item__text">{text}</span>
    </div>
  </div>;
}
